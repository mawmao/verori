create table if not exists public.waitlist_signups (
    id uuid primary key default gen_random_uuid(),
    email text not null,
    deliverable_type text,
    source text default 'landing',
    created_at timestamptz not null default now()
);
create unique index if not exists waitlist_signups_email_lower_idx on public.waitlist_signups (lower(email));

alter table public.waitlist_signups enable row level security;

create or replace function public.join_waitlist(p_email text, p_source text default 'waitlist_page')
returns table (signup_id uuid, already_joined boolean)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
  v_clean_email text := lower(trim(p_email));
begin
  insert into public.waitlist_signups (email, source)
  values (v_clean_email, coalesce(nullif(trim(p_source), ''), 'waitlist_page'))
  on conflict ((lower(email))) do nothing
  returning id into v_id;

  if v_id is not null then
    return query select v_id, false;
  else
    select id into v_id
    from public.waitlist_signups
    where lower(email) = v_clean_email
    limit 1;

    return query select v_id, true;
  end if;
end;
$$;


create or replace function public.set_waitlist_deliverable(p_signup_id uuid, p_deliverable_type text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
    update public.waitlist_signups
    set deliverable_type = left(trim(p_deliverable_type), 100)
    where id = p_signup_id
        and deliverable_type is null;
end;
$$;


grant execute on function public.join_waitlist(text, text) to anon, authenticated;
grant execute on function public.set_waitlist_deliverable(uuid, text) to anon, authenticated;

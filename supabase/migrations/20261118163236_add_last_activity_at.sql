alter table portal add column if not exists last_activity_at timestamptz default now();

create or replace function public.update_portal_last_activity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    update public.portal
    set last_activity_at = new.created_at
    where id = new.portal_id;
    return new;
end;
$$;

create trigger on_activity_event_inserted
    after insert on public.activity_event
    for each row execute procedure public.update_portal_last_activity();

update portal p set last_activity_at = (
    select max(created_at) from activity_event where portal_id = p.id
) where exists (select 1 from activity_event where portal_id = p.id);

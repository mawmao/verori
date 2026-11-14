create or replace function public.handle_new_portal()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    insert into public.activity_event (portal_id, type, actor, created_at)
    values (
        new.id,
        'created',
        'consultant',
        new.created_at
    );
    return new;
end;
$$;

create trigger on_portal_created
  after insert on public.portal
  for each row execute procedure public.handle_new_portal();

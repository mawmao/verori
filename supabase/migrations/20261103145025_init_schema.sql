
------------------------------
-- ENUMS
------------------------------

create type portal_status as enum ('sent', 'viewed', 'approved', 'changes_requested');

create type actor_type as enum ('consultant', 'client', 'system');

create type activity_type as enum (
    'created',
    'viewed',
    'approved',
    'changes_requested',
    'reminder_sent',
    'export_generated'
);


------------------------------
-- TABLES & ROW LEVEL SECURITY
------------------------------

create table profile (
    id                  uuid references auth.users on delete cascade primary key,
    name                text,
    branding_config     jsonb,
    created_at          timestamptz default now()
);
alter table profile enable row level security;

create policy "Users can select own profile" on profile for select using ((select auth.uid()) = id);
create policy "Users can update own profile" on profile for update using ((select auth.uid()) = id);

------------------------------

create table portal (
    id                  uuid default gen_random_uuid() primary key,
    user_id             uuid not null references profile(id) on delete cascade,
    client_name         text not null,
    title               text not null,
    context_note        text,
    status              portal_status not null default 'sent',
    share_token         text not null unique default gen_random_uuid(),
    created_at          timestamptz default now(),
    updated_at          timestamptz default now()
);
create index portal_user_id_idx on portal(user_id);

alter table portal enable row level security;

create policy "Users can select own portals" on portal for select using ((select auth.uid()) = user_id);
create policy "Users can insert own portals" on portal for insert with check ((select auth.uid()) = user_id);
create policy "Users can update own portals" on portal for update using ((select auth.uid()) = user_id);
create policy "Users can delete own portals" on portal for delete using ((select auth.uid()) = user_id);

------------------------------

create table file (
    id                  uuid default gen_random_uuid() primary key,
    portal_id           uuid references portal(id) on delete cascade not null,
    name text           not null,
    mime_type           text not null,
    storage_key         text not null,
    size                integer not null,
    created_at          timestamptz default now()
);
create index file_portal_id_idx on file(portal_id);

alter table file enable row level security;

create policy "Users can select files for own portals" on file for select using (
    exists (select 1 from portal where portal.id = file.portal_id and portal.user_id = (select auth.uid()))
);
create policy "Users can insert files for own portals" on file for insert with check (
    exists (select 1 from portal where portal.id = file.portal_id and portal.user_id = (select auth.uid()))
);

------------------------------

create table activity_event (
    id                  uuid default gen_random_uuid() primary key,
    portal_id           uuid not null references portal(id) on delete cascade,
    type                activity_type not null,
    actor               actor_type not null,
    metadata            jsonb,
    created_at          timestamptz default now()
);
create index activity_event_portal_id_idx on activity_event(portal_id);

alter table activity_event enable row level security;

create policy "Users can select activities for own portals" on activity_event for select using (
    exists (select 1 from portal where portal.id = activity_event.portal_id and portal.user_id = (select auth.uid()))
);


------------------------------
-- TRIGGERS
------------------------------

create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    insert into public.profile (id, name, branding_config)
    values (
        new.id,
        new.raw_user_meta_data->>'full_name',
        new.raw_user_meta_data->'branding_config'
    );
    return new;
end;
$$;

-- Since authenticated users can still manually
-- invoke it through: POST /rest/v1/rpc/handle_new_user
revoke execute on function public.handle_new_user()
    from public, anon, authenticated;

create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user();


------------------------------

create function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

create trigger on_portal_updated
    before update on portal
    for each row execute procedure public.handle_updated_at();

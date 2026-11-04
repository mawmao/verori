
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
    'deliverables',
    'deliverables',
    false,
    52428800, -- 50 MB
    array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

create policy "Consultants can only upload deliverables to folder that matches their ID"
on storage.objects for insert to authenticated
with check (
    bucket_id = 'deliverables' and (storage.foldername(name))[1] = (select auth.uid()::text)
);

create policy "Consultants can only view their own deliverables"
on storage.objects for select to authenticated
using (
    bucket_id = 'deliverables' and (storage.foldername(name))[1] = (select auth.uid()::text)
);

create policy "Consultants can update own deliverables"
on storage.objects for update to authenticated
using (
    bucket_id = 'deliverables' and (storage.foldername(name))[1] = (select auth.uid()::text)
);

create policy "Consultants can delete own deliverables"
on storage.objects for delete to authenticated
using (
    bucket_id = 'deliverables' and (storage.foldername(name))[1] = (select auth.uid()::text)
);

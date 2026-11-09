create or replace function generate_short_id(length int default 8)
returns text as $$
declare
  chars text := 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  result text := '';
  i int := 0;
begin
  for i in 1..length loop
    result := result || substr(chars, floor(random() * 62)::int + 1, 1);
  end loop;
  return result;
end;
$$ language plpgsql;

alter table portal alter column share_token set default generate_short_id(8);

update portal set share_token = generate_short_id(8) where length(share_token) > 20;

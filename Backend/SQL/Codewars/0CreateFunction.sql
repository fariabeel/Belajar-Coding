create function increment(num integer) returns integer as $$
select num + 1;
$$ language sql immutable
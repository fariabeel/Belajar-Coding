select * from customers where name like "%es";
select * from customers where name like "se%";

select * from customers where city like "_ondon";

-- select * from customers where name like "[abf]%"; SQL
select * from customers where name regexp "^[abf]"; -- MySQL start with a, b, or f

-- select * from customers where name  like '[a-f]%'; SQL
select * from customers where name regexp "^[a-f]"; -- MySQL start with a-f

select * from customers where name like 'a__%';
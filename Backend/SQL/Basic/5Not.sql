select * from customers where not country = "Mexico";
select * from customers where not name like "A%";
select * from customers where name not like "A%";
select * from customers where id not between 10 and 50;
select * from customers where country not in ("Sweden", "UK");
select * from customers where not id > 10;
select * from customers where not id < 60;
select * from customers where country in ("venezuela", "spain", "germany");
select * from customers where country not in ("venezuela", "spain", "germany");

select * from customers where id in (select customer_id from orders);
select * from customers where id not in (select customer_id from orders);
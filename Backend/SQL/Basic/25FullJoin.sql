-- select customers.name, orders.id from customers full join orders on customers.id = orders.customer_id; SQL

select customers.name, orders.id from customers
left join orders on customers.id = orders.customer_id
union
select customers.name, orders.id from customers
right join orders on customers.id = orders.customer_id where customers.id is null
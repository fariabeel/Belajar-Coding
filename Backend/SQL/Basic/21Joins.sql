select customers.id, name, customer_id from customers join orders on customers.id = orders.customer_id;
-- just id is ambiguous cuss customers and orders have id

select orders.id, customers.name, orders.date from orders join customers on orders.customer_id = customers.id;
select orders.id, customers.name, orders.date from orders inner join customers on orders.customer_id = customers.id; -- what the difference?


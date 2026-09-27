select customers.name, orders.id from customers 
left join orders on customers.id = orders.customer_id order by customers.name;

select customers.name, orders.id from customers
left join orders on customers.id = orders.customer_id where orders.customer_id is null;
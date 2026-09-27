select products.id, products.name, categories.name from products join categories on products.category_id = categories.id; 
-- add table name is good practice

select orders.customer_id, customers.name, shippers.name from orders 
join customers on orders.customer_id = customers.id 
join shippers on orders.shipper_id = shippers.id;
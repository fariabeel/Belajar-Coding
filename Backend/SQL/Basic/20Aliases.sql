select name as custom, contact as custom, address as custom, city as custom, postal_code as custom, country as custom from customers;
select country from customers as custom;

-- select name as [custom name] from products; SQL
select name as 'custom name' from products;

-- select name, address + ", " + postal_code + " " + city + ", " + country as address from customers; SQL
select name , concat(address, ", ", postal_code, " ", city, ", ", country) as address from customers;

select * from customers as persons;

select name, customer_id from customers as c join orders as o on c.id = o.customer_id;
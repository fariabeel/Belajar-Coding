select country, count(id) as 'number of customers' from customers group by country;
select country, count(id) as 'number of customers' from customers group by country order by count(id) desc;

select shippers.name, count(orders.id) as 'orders number' from orders
join shippers on shippers.id = orders.shipper_id 
group by shippers.name
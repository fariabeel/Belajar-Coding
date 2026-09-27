select sum(quantity) from orderdetails;
select sum(quantity) from orderdetails where product_id = 11;
select sum(quantity) as total from orderdetails;
select order_id, sum(quantity) from orderdetails group by order_id;
select sum(quantity*10) from orderdetails;
select sum(price*quantity) from orderdetails left join products on orderdetails.product_id = products.id;
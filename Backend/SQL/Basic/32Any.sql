select name from products where products.id = 
any(select product_id from orderdetails where quantity = 10);

select name from products where id =
any(select product_id from orderdetails where quantity > 99);

select name from products where id =
any(select product_id from orderdetails where quantity > 1000);
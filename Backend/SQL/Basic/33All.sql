select name from products where id =
all(select product_id from orderdetails where quantity > 0) -- what the uses? 
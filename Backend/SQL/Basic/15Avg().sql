select avg(price) from products;
select avg(price) from products where category_id = 1;
select avg(price) as average from products;
select * from products where price > (select avg(price) from products);
select category_id, avg(price) as average from products group by category_id;
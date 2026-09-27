select count(*) from products;
select count(name) from products;

select count(category_id) from products;
select count(distinct category_id) from products;

select count(id) from products where price>100;

select count(*) as custom from products;
select count(*) as "number of records" from products;

select count(*) as "Number of Records", category_id from products group by category_id;
select min(price) from products;
select min(price) as smallest from products;
select min(birthdate) as earliest from employees;
select min(price) as smallest, category_id from products group by category_id;
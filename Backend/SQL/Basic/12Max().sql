select max(price) from products;
select max(price) as highest from products;
select max(birthdate) as Latest from employees;
select max(price) as highest, category_id from products group by category_id;
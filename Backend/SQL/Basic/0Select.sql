-- Select, Select Distinct
select * from customers;

select name,country from customers;
select country, name from customers;

select distinct country from customers;
select distinct country, name from customers;
select country from customers;

select count(distinct country) from customers;
select count(distinct country, name) from customers;
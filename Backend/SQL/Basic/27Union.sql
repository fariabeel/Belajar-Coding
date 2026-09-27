select country from customers union select country from suppliers; -- distinct only
select country from customers union all select country from suppliers;
select city, country from customers where country = 'germany' union select city, country from suppliers where country = 'germany';

select 'customer' as type, contact, city, country from customers union
select 'supplier', contact, city, country from suppliers;
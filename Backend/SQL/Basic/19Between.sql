select * from products where price between 10 and 20;
select * from products where price not between 10 and 20;
select * from products where price between 10 and 20 and category_id in (1,2,3);
select * from products where name between "Ravioli Angelo" and "Tofu";
select * from products where name not between "Ravioli Angelo" and "Tofu";
select * from orders where date between '1996-08-19' and '1997-01-06';
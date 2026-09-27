select * from customers where country = "Mexico" and name like "A%";
select * from customers where country = "Brazil" and name like "Q%" and id > 30;

select * from customers where country = 'brazil' and (name like "Q%" or name like "G%");
select * from customers where country = 'brazil' and name like "Q%" or name like "G%";
select * from customers where name like "a%";
select * from customers where country like "%en%";
select * from customers where name like "%a";

select * from customers where city like "l_nd__";
select * from customers where city like "__dri_";

select * from customers where city like "li%";
select * from customers where city like "ma%" or city like "lo%";

select * from customers where city like "b%s"; -- start b end s

select * from customers where city like "a__%"; -- start a followed by 2 letters
select * from customers where name like "_r%"; -- start a in second potition

select * from customers where country like "spain"; -- like = "="

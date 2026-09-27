select a.name as name1, b.name as name2, a.city from customers a, customers b 
where a.id <> b.id and a.city = b.city order by a.city;
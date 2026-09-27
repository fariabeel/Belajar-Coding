-- select * into customBackup from customers; SQL
create table custom as select * from customers;

-- SELECT * INTO CustomersBackup2026 IN 'Backup.mdb' FROM Customers; SQL
create table custom.custom as select * from customers; -- create database first

-- select name, contact, country into custom from customers; SQL
create table custom as select name, contact, country from customers;

-- select * into us_custom from customers where country = "usa"; SQL
create table us_custom as select * from customers where country = "usa";


-- select customers.name, orders.id into CustomersOrder from customers left join orders on orders.customer_id = customers.id; SQL
create table CustomersOrder as select customers.name, orders.id from customers left join orders on orders.customer_id = customers.id;
	
-- select * into custom from customers where 1 = 0; SQL
create table custom as select * from customers where 1 = 0; -- empty table
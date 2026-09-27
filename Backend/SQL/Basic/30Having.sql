select country, count(customers.id) as 'customers number' from customers 
group by country having count(customers.id) > 5;

select country, count(customers.id) as 'customers number' from customers 
group by country having count(customers.id) > 5 
order by count(customers.id) desc;

select employees.last_name, count(orders.id) as 'orders number' from employees
join orders on orders.employee_id = employees.employee_id
group by employees.last_name
having count(orders.id) > 20;

select employees.last_name, count(orders.id) as 'orders number' from employees
join orders on orders.employee_id = employees.employee_id
where employees.last_name = 'davolio' or employees.last_name = 'peacock'
group by employees.last_name
having count(orders.id) > 30;
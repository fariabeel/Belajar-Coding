select orders.id, employees.first_name, employees.last_name from orders 
right join employees on orders.employee_id = employees.employee_id;
select * from suppliers
where exists(select * from products where products.supplier_id = suppliers.id and price < 10)
-- create procedure customersbycity
-- @city nvarchar(50)
-- as
-- begin
-- select * from customers where city = @city
-- end; -- SQL

-- DELIMITER //
-- create procedure customersbycity(
-- in p_city varchar(50)
-- )
-- begin 
-- select * from customers where city = p_city;
-- end //
-- DELIMITER ;

-- EXEC GetCustomersByCity @City = 'London'; SQL
-- call customersbycity('london')

-- delimiter //
-- create procedure customersbycity(
-- in pcity varchar(50),
-- in ppostal varchar(10)
-- )
-- begin select * from customers where city = pcity and postal_code = ppostal;
-- end //
-- delimiter 

-- call customersbycity('london', 'WA1 1DP')
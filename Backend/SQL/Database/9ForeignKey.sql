-- create table CustomOrders(
-- OrderID int primary key,
-- OrderNumber int,
-- PersonID int,
-- constraint ID /*customName*/ foreign key(personID) references custom(id) -- custom.id must be primary key
-- );

-- alter table customorders add constraint id /*customName*/ foreign key(personID) references custom(id);

-- alter table customorders drop foreign key id /* drop foreign key customName*/;
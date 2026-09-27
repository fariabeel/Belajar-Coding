-- create table Persons(
-- Name varchar(225),
-- ID int,
-- Age int,
-- unique(Age)
-- );

-- insert into persons(name,id,age) values('sigma boy',1,1);
-- insert into persons(name,id,age) values('Kagenou',1,1);

-- create table Persons(
-- Name varchar(225),
-- ID int,
-- Age int,
-- constraint UC_Person unique (ID, Name)
-- );

-- alter table persons add unique (ID);
-- alter table persons add constraint UC_Person unique (ID, Name);

-- alter table persons drop index uc_person;
-- alter table custom drop constraint id -- if id column is unique
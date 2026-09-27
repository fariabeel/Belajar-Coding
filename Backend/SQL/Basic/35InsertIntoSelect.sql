insert into custom (name, city, country) select name, city, country from suppliers;
-- insert into custom select id, name, contact, address, city, postal_code, country from suppliers; -- cuss columns not same cannot use *
insert into custom (name, city, country) select name, city, country from suppliers where country = 'germany';
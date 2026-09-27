select name, price,
case
when price < 20 then "Low"
when price between 20 and 50 then 'medium'
else 'high'
end as PriceCategory -- can erase the aliases
from products;
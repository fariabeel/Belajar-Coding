<?php
function pheol($val) {echo $val.PHP_EOL;}
pheol(3**3);
$y = 3;
$y += 10; # like javascript
pheol($y);
pheol(1!=2); # like javascript
pheol(1!==2);
pheol(1<>2);
pheol(1<=>2);

$y++;
pheol($y);

$y--;
pheol($y); # like javascript

pheol(0&&1); # like javascript
pheol(0||1);

pheol(!true); #javascript

$y = 'real ';
$y .= 'prabowo';
pheol($y);

$y = [1,2,3,4,5];
$x = [3,4,5,6,7];

print_r($y + $x);
print_r($x + $y);

var_dump([1,2,3] == ["1","2","3"]);
var_dump([1,2,3] === ["1","2","3"]);
var_dump([1,2,3] != ["1","2","3"]);
var_dump([1,2,3] !== ["1","2","3"]);
var_dump([1,2,3] <> ["1","2","3"]); # same with !=

$y = true ? 'yippee':'tetot';
pheol($y);

pheol(null??'work anyway') # like 0 or 1 returns 1
?>
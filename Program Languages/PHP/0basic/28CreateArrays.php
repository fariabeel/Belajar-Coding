<?php
function pheol($val) {echo $val.PHP_EOL;}

$arr = [1,2,3];
$arr = [
    1,
    2,
    3,
];

$empty = [];
$empty['real'] = 'fr';
pheol($empty['real']);

$mixType = [1, 'wow' => 'real', 2];
pheol($mixType[1])
?>
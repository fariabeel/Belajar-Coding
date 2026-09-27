<?php
function pheol($val) {echo $val.PHP_EOL;}

$arr = array('str', 1, ['apples', 'bananas'], function() {return 'hello world';});

pheol($arr[3]());
pheol($arr[2][1]);

pheol(count($arr));

# Indexed Arrays
$arr[0] = 'walawe';
pheol($arr[0]);
?>
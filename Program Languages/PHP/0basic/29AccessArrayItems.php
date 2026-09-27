<?php
function pheol($val) {echo $val.PHP_EOL;}

$arr = ['wuw' => 'real'];
pheol($arr['wuw']);
pheol($arr["wuw"]);

function executing() {pheol('executed');}
$arr = ['executing'];
pheol($arr[0]);
$arr[0]();

$arr = ['log' => 'executing'];
$arr['log']();
?>
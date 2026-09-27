<?php
$arr = [1,2,3];

foreach($arr as &$i) {$i = 'wuw';}
unset($i);
$i = 'real';
var_dump($arr);


$arr = [1,2,3];
foreach($arr as &$i) {$i = 'wuw';}
$i = 'real';
var_dump($arr)
?>
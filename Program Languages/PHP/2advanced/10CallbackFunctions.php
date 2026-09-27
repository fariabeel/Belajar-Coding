<?php
function pheol($val) {echo $val.PHP_EOL;}

function power($n) {return $n*$n;}
print_r(array_map('power', [1,2,3,4,5]));

print_r(array_map(function($n) {return $n*$n;}, [1,2,3,4,5]));

function callback($str, $func) {pheol($func($str));}

function ask($str) {return "$str?";}
function exclaim($str) {return "$str!";}

callback('realll','exclaim');
?>
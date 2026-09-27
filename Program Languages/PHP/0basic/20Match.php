<?php
function pheol($val) {echo $val.PHP_EOL;}

$var = Match(2) {
    1 => 'uno',
    2 => 'dos',
    3 => 'tress',
    default => 'numero uwato?'
};

pheol($var);

$var = Match(1) {
    1,2,3 => 'nomero too small',
    4,5,6 => 'numero perfect',
    default => 'numero uwato?',
};

pheol($var);
?>
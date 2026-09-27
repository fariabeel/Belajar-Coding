<?php
function pheol($val) {echo $val.PHP_EOL;}
PHEOL("It's worked");

function printer($val = 'are you lagging?') {echo $val.PHP_EOL;}
printer();

function returning() {return 1;}
pheol(returning());

$int = 0;
function changing(&$val) {$val += 10;}

changing($int);
pheol($int);

function spread(...$i) {
    $val = 0;
    foreach($i as $num) $val += $num;
    pheol($val);
}
spread(1,2,3);

function varidic($first, ...$all) {foreach($all as $i) pheol($first." ".$i);}
#cannot func(...$all, $first)
varidic('sup','pall','twin','dude');

// function strict(int $a, int $b) {return $a+$b;}
// pheol(strict(1,'2 anjass')) // what??

function add(mixed $a, mixed $b) : int {return $a+$b;}
pheol(add(1.2,2));
?>
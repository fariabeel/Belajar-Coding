<?php
function preach($val) {
    foreach($val as $key => $i) {
        if(count($val)-1 === $key) {echo $i;}
        else {echo $i.", ";}
    } echo PHP_EOL;
}
function passo($val) {
    $str = '';
    foreach($val as $x => $y) {$str .= "$x: $y, ";}
    echo rtrim($str, ', ') . PHP_EOL;
}

$arr = [5,2,4,1,3];
sort($arr);
preach($arr);

$arr = ["c","d","a",'b'];
sort($arr);
preach($arr);

$arr = [5,2,4,1,3];
rsort($arr);
preach($arr);

$arr = ['third' => 'c val', 'first' => 'a val', 'second' => 'b val'];
asort($arr); #value based sorting
passo($arr);

$arr = ['third' => 'c val', 'first' => 'a val', 'second' => 'b val'];
arsort($arr); 
passo($arr);

$arr = ['c key' => 'third', 'a key' => 'first', 'b key' => 'second'];
ksort($arr); #key based sorting
passo($arr);

$arr = ['c key' => 'third', 'a key' => 'first', 'b key' => 'second'];
krsort($arr);
passo($arr);

?>
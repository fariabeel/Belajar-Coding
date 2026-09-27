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

$arr = [1,2,3];
$arr[] = 'sup';
preach($arr);

array_push($arr,4,5,6);
preach($arr);

$assoArr = [];
$assoArr += ['wuw' => 'real', 'gufron' => 'pejaga gawang'];
passo($assoArr);

$arr = ['end'];
array_unshift($arr,1,2,3);
preach($arr);

$arr = [1,2,3,4,5];
array_splice($arr, 1, 2); #offset 1 remove 2 index ahead
preach($arr);

$arr = [1,2,3,4,5];
array_splice($arr, 1, 0, 'kuasong'); #index 1 insert it at index 1 no remove
preach($arr);

$arr = [1,2,3];
$arr0 = [4,5,6];
preach(array_merge($arr,$arr0));

?>
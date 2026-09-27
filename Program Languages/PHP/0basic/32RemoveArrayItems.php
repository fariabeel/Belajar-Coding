<?php
function preach($val) {
    foreach($val as $key => $i) {
        if(count($val)-1 === $key) {echo $i;}
        else {echo $i.", ";}
    } echo PHP_EOL;
}
function pheol($val) {echo $val.PHP_EOL;}
function passo($val) {
    $str = '';
    foreach($val as $x => $y) {$str .= "$x: $y, ";}
    echo rtrim($str, ', ') . PHP_EOL;
}

$arr = [1,2,3,4,5];
array_splice($arr, 1, 1); #index 1 remove 1 item ahead
preach($arr);

$arr = [1,2,3,4,5];
array_splice($arr, 1, 3); #index 1 remove 3 item ahead
preach($arr);

$arr = [1,2,3,4,5];
unset($arr[1]);
preach($arr); #what?

$arr = [1,2,3,4,5];
unset($arr[1], $arr[2]);
preach($arr); 

$arr = ['a' => 'jass', 'r' => 'wow', 'p' => 'diddy'];
unset($arr["r"],$arr['p']);
passo($arr);

$arr = ['a' => 'jass', 'r' => 'wow', 'p' => 'diddy'];
$newArr = array_diff($arr, ['diddy', 'jass']); #exclude value 'diddy' and 'jass'
passo($newArr);

$arr = [1,2,3,4,5];
array_pop($arr);
preach($arr);

$arr = [1,2,3,4,5];
array_shift($arr);
preach($arr);

?>
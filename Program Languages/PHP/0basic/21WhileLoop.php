<?php
function pheol($val) {echo $val.PHP_EOL;}

$i = 0;
while ($i<10) {
pheol($i);
$i++;
}

$i = 0;
while ($i<10) {
pheol($i);
if($i===5) {break;}
$i++;
}

$i = 0;
while ($i<10) {
    $i++;
    if($i===5) {continue;}
    pheol($i);
}

$i = 0;
while ($i<10) :
    $i++;
    pheol($i);
endwhile;
?>
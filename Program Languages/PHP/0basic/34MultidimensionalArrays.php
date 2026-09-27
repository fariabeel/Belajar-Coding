<?php
function table($arr) {
    echo 'Car Instock Sold'.PHP_EOL;
    foreach($arr as $i) {echo "$i[0] $i[1] $i[2]".PHP_EOL;}
    echo PHP_EOL;
}

$arr = [['Volvo',22,18], ['BMW',15,13], ['Saab',5,2], ['LandRover',17,15]];
table($arr)
?>
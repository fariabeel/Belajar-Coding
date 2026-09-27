<?php
function pheol($val) {echo $val.PHP_EOL;}
function preach($arr) {
    foreach($arr as $key => $val) {
        if (count($arr)-1===$key) {
            echo $val;
        } else {
            echo "$val, ";
        }
    }
    echo PHP_EOL;
}

pheol(preg_Match('/^ba(na){3}/i','nbanananana'))
?>  
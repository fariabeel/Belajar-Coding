<?php
function pheol($val) {echo $val.PHP_EOL;}

readfile("text.txt"); echo PHP_EOL;
pheol(readfile("text.txt"));
?>
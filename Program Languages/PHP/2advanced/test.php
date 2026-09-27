<?php
function pheol($val) {echo $val.PHP_EOL;}
function weblog($val) {echo $val."<br>";}

try {
    throw new Exception('error');
} catch (Exception $err) {
    pheol($err->getMessage());
    pheol($err->getLine());
    pheol($err->getCode());
    pheol($err->getFile());
} 
?>
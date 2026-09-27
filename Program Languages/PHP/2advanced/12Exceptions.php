<?php
function pheol($val) {echo $val.PHP_EOL;}

try {
    throw new Exception('error worked');
} catch (Exception $err) {
    pheol($err->getMessage());
} finally {
    pheol("wow");
}

try {
    throw new Exception('error worked');
} catch (Exception $err) {
    echo "
    {$err->getFile()}
    {$err->getLine()}
    {$err->getCode()}
    {$err->getMessage()}
    ";
}
?>
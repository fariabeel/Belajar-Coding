<?php

$x = 5;
function number() {echo $x;} # warning
number();
echo $x . "\n";

function local() {
    $x = 'real';
    echo $x . "\n";
}
local();
echo $x . "\n";

function staticc() {
    static $i = 0; # still local variable
    
    echo $i . "\n";
    $i++;
}

staticc();
staticc();
staticc();
staticc();

$y = 10;
function globall() {
    global $x, $y;
    $y = $x + $y;
}
globall();
echo $y . "\n";

$y = 10;
function superGlobal() {
    $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y']; # globals must all capital
}
superGlobal();
echo $y

?>

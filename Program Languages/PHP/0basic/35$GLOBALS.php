<?php
function pheol($val) {echo $val.PHP_EOL;}

$var = 'globals variable';

function logging() {pheol($var);} #warning
logging();

function loggingFixed() {pheol($GLOBALS['var']);}
loggingFixed();

function defining() {
    global $var;
    pheol($var);
}
defining();

pheol($GLOBALS['var']);

function makeVar() {$GLOBALS['newVar'] = 'made inside function';}
makeVar();
pheol($newVar); # but it's work
pheol($GLOBALS['newVar']);

?>
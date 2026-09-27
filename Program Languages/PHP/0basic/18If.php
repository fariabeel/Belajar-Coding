<?php
function pheol($val) {echo $val.PHP_EOL;}

if (true) {pheol('anjass');} # like javascript

$true = true;
if($true) {pheol('anjass');}

if(true xor false) {pheol('anjass');}
if(true or false) {pheol('anjass');}
if(true and true) {pheol('anjass');}

if(true || false) {pheol('anjass');} #like javascript

if(false) {pheol("anjass");} else {pheol('tidak anjass');}

if(false) {pheol('anjass');} elseif(false) {pheol('anjass');} else{pheol('tidak anjass');}

if (true) $a = 'variable';
pheol($a);

$a = 1 > 2 ? 'uno' : 'dos'; #like javascript
pheol($a);

if(true) {if(true) {pheol('anjass');}}
?>
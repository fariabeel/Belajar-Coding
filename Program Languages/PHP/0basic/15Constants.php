<?php
function pheol($val) {echo $val.PHP_EOL;}

define('php',"This program runs on PHP languange");
pheol(php);

function defining() {define('printl','Use echo instead');}
defining();
pheol(printl);

const javascript = "It's PHP, not Javascript";
pheol(javascript);

define('cars',array('Volvo','BMW','Toyota'));
pheol(cars[0]);

const characters = array('Subaru','Light','Johan', 'Jotaro');
pheol(characters[0]);
?>
<?php
function pheol($val) {echo $val.PHP_EOL;}

pheol($_SERVER['PHP_SELF']);
pheol($_SERVER['SCRIPT_NAME']);
pheol($_SERVER['REQUEST_TIME']);
?>
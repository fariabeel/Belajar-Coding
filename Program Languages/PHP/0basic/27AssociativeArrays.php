<?php
function pheol($val) {echo $val.PHP_EOL;}

$char = array('name'=>'Astolfo', 'sex'=>'I dunno', 'age'=>'15');
pheol($char['name']);

$char['name'] = 'femboy baddie';
pheol($char['name']);

foreach ($char as $x => $y) {pheol("$x: $y");}
?>
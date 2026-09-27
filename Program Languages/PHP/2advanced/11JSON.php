<?php
function pheol($val) {echo $val.PHP_EOL;}

pheol(json_encode(array('peter' => 1000, 'petrux' => 28, 'drake' => 10)));
pheol(json_encode(array("BMW", "Volvo", 'Bugatti')));

var_dump(json_decode('{"peter":1000,"petrux":28,"drake":10}')); #use var_dump() to take a look
var_dump(json_decode('{"peter":1000,"petrux":28,"drake":10}', true)); #return associative array type

$arr = json_decode('{"peter":1000,"petrux":28,"drake":10}');
pheol($arr->peter);
pheol($arr->petrux);

$arr = json_decode('{"peter":1000,"petrux":28,"drake":10}', true);
pheol($arr['peter']);
pheol($arr['petrux']);

?>
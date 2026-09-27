<?php
function pheol($val) {echo $val.PHP_EOL;}
function preach($val) {
    foreach($val as $key => $i) {
        if(count($val)-1 === $key) {echo $i;}
        else {echo $i.", ";}
    } echo PHP_EOL;
}

$arr = array(1,2,3);
foreach ($arr as $i) {
    pheol($i);
}

$arr = array('Subaru','Ayanokouji','L');
foreach ($arr as $key => $val) {
    pheol("$key $val");
}

class Character{
    public $character;
    public $anime;
    public function __construct($character, $animek) {
        $this->character = $character;
        $this->anime = $animek;
    }
}

$char = new Character('Subaru','Konosuba');

foreach ($char as $key => $val) {
    pheol("$key $val");
}

$arr = array('Subaru','Ayanokouji','L');
foreach ($arr as $i) {
    if(true) $i = 'hacked';
}
preach($arr);

$arr = array('Subaru','Ayanokouji','L');
foreach ($arr as &$i) {
    if(true) $i = 'hacked';
}
preach($arr);

$arr = array('Subaru','Ayanokouji','L');
foreach ($arr as $i):
    pheol($i);
endforeach;
?>
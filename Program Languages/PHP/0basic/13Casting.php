<?php
function pheol($val) {echo $val.PHP_EOL;}

pheol((string) 1);
pheol((string) 1.1);
pheol((string) true);
pheol((string) NULL);

pheol((int) 1.1);
pheol((int) "25km");
pheol((int) "km25");
pheol((int) true);
pheol((int) NULL);

pheol((float) 1);
pheol((float) "25km");
pheol((float) "km25");
pheol((float) true);
pheol((float) NULL);

pheol((bool) 1);
pheol((bool) 1.1);
pheol((bool) 0); # nothing
pheol((bool) -1);
pheol((bool) 'hello');
pheol((bool) ''); # nothing
pheol((bool) NULL); # nothing

pheol((array) 1); # warning
pheol((array) 1.1); # warning
pheol((array) 'string'); # warning
pheol((array) true); # warning
pheol((array) NULL); # warning

class Car {
    public $color;
    public $model;
    public function __construct($color, $model) {
        $this->color = $color;
        $this->model = $model;
    }
    public function message() {
        return "My car is a " . $this->color . " " . $this->model . "!";
    }
}

$carGw = New Car('Black', 'Bugatti');
$carGw = (array) $carGw;
var_dump($carGw);

$int = (object) 1;
$float = (object) 1.1; 
$str = (object) 'string'; 
$bool = (object) true; 
$null = (object) NULL; 

$arrayA = (object) array('Volvo','BMW',"Toyota");
$arrayB= (object) array('Peter' => 'Griffin','Ben' => '10', 'Joe' => 'Seph');
pheol($arrayA->{"1"});
pheol($arrayB->Joe);
?>
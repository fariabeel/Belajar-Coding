<?php
function pheol(mixed $val) {echo $val . PHP_EOL;}

$numericType = 2;
$numericType0 = "2";

var_dump($numericType);
var_dump($numericType0); #string

var_dump(is_int($numericType) /* return 1 */);
var_dump(2.5 * 4); #float cuss one of it's float

var_dump(9223372036854775807);
var_dump(9223372036854775808);

var_dump(-9223372036854775807);
var_dump(-9223372036854775808);

pheol(PHP_INT_MAX);
pheol(PHP_INT_MIN);
pheol(PHP_INT_SIZE);

var_dump(2.0);
var_dump(2.1111111111111112); #precision 15 digits

pheol(PHP_FLOAT_MAX);
pheol(PHP_FLOAT_MIN);
pheol(PHP_FLOAT_DIG);
pheol(PHP_FLOAT_EPSILON);

var_dump(is_finite(19e410));
var_dump(is_finite(1.9e411));
var_dump(is_finite(19e306));

var_dump(is_infinite(19e307));
var_dump(is_infinite(19e306));
var_dump(is_infinite(19e306 * 10));

var_dump(acos(8));
var_dump(is_nan(acos(8)));

var_dump(is_numeric(5));
var_dump(is_numeric("5"));
var_dump(is_numeric("wow"));

pheol(intval(2.1)); #integer only
pheol(intval(2.222222222222222222222222222222222))
?>
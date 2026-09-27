<?php
function pheol($val) {echo $val.PHP_EOL;}

pheol(filter_var('()()()()()()()()()()()@gmail.com', FILTER_SANITIZE_EMAIL));

$email = "johnmple.com";
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    pheol("valid email");
} else { pheol('invalid email'); }

$url = "http:/wow.com";
$url = filter_var($url, FILTER_SANITIZE_URL);
if (!filter_var($url, FILTER_VALIDATE_URL) === false) {
    pheol("valid url");
} else { pheol('invalid url'); }

$int = "1";
if (!filter_var($int, FILTER_VALIDATE_INT) === false) {
    pheol("valid integer");
} else { pheol('invalid integer'); }

$int = 0;
if (!filter_var($int, FILTER_VALIDATE_INT) === false) {
    pheol("valid integer");
} else { pheol('invalid integer'); }

$int = 10;
if (filter_var($int, FILTER_VALIDATE_INT) === 0 || !filter_var($int, FILTER_VALIDATE_INT) === false) {
    pheol("valid integer");
} else { pheol('invalid integer'); }

$ip = "10.1.1.1";
if (!filter_var($ip, FILTER_VALIDATE_IP) === false) {
    pheol("valid ip");
} else { pheol('invalid ip'); }
?>
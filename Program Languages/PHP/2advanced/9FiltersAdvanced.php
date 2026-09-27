<?php
function pheol($val) {echo $val.PHP_EOL;}

var_dump((bool) filter_var(10000, FILTER_VALIDATE_INT, array("options" => array("min_range"=>120, "max_range"=>1000))));

var_dump((bool) filter_var('2000:43db:34e2:35da:3453:3453:ed42:35f2', FILTER_VALIDATE_IP, FILTER_FLAG_IPV6));

var_dump((bool) filter_var("https://www.youtube.com?", FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED));

pheol(filter_var("3k4ikÆØÅm", FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH));


?>
<?php
function pheol($val) {echo $val.PHP_EOL;}

$file = fopen("customtext.txt", "w");
fwrite($file, "ba what the hell dawg\n");
fwrite($file, "wuw");
fclose($file);

$file = fopen("customtext.txt",'r');
pheol(fread($file, 100));
fclose($file);

$file = fopen("customtext.txt", "w");
fwrite($file, 'erase all');
fclose($file);

$file = fopen('customtext.txt', 'r');
pheol(fread($file, 100));
fclose($file);

$file = fopen("customtext.txt", 'a'); #append
fwrite($file, "\ntext is extended");
fclose($file);

$file = fopen("customtext.txt", 'r');
pheol(fread($file, 100));
fclose($file);

?>
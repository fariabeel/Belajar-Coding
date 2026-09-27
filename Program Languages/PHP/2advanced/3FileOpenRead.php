<?php
function pheol($val) {echo $val.PHP_EOL;}

$file = fopen("text.txt", "r") or die("file cannot be openned");
pheol(fread($file, filesize("text.txt")));
fclose($file); #close is important to cut the resources need

$file = fopen("text.txt", "r") or die("file cannot be openned");
pheol(fread($file, 18));
fclose($file);

$file = fopen("text.txt", "r") or die("file cannot be openned");
pheol(fread($file, 9));
fclose($file);

$file = fopen("text.txt", "r") or die("file cannot be openned");
pheol(fgets($file)); #first line
fclose($file);

$file = fopen("longtext.txt", "r") or die("file cannot be openned");
while (!feof($file)) {
    echo fgets($file); # line 1 then 2 then 3 till end
    #auto EOL
}
fclose($file); echo PHP_EOL;

$file = fopen("text.txt", "r") or die("file cannot be openned");
pheol(fgetc($file)); # 1 character
while (!feof($file)) {
    echo fgetc($file);
    #auto EOL
}
fclose($file);
?>
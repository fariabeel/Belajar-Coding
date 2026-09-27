<?php
function pheol($x) {echo $x . PHP_EOL;};
pheol(substr("Sisfor ITS",0,3)); # start at index 0 and go on 3 index
pheol(substr("Sisfor ITS",3,3));

pheol(substr("Sisfor ITS",3)); # start at index 3 and go on

pheol(substr("Sisfor ITS",-3,3));
pheol(substr("Sisfor ITS",3,-4));
?>
<?php
function pheol(mixed $val) {echo $val.PHP_EOL;}

pheol(pi());
pheol(min(1,2,3,4,-1000));
pheol(max(1,2,3,4,-1000));
pheol(abs(-1.1));
pheol(sqrt(64));
pheol(round(1.5));
pheol(rand());
pheol(rand(1,10))
?>
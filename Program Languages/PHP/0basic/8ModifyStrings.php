<?php
    function pheol($x) {echo $x . PHP_EOL;}

pheol(strtoupper('wow'));
pheol(strtolower('ANJASSS'));
pheol(str_replace('beijing','twin','wassup beijing'));
pheol(strrev('wassup beijing'));
pheol(trim('                                             aku ITS                                               '));

pheol(explode(" ",'1 2 3 4 5 6 7 8 9 0')); # warning
print_r(explode(" ",'1 2 3 4 5 6 7 8 9 0'));
?>
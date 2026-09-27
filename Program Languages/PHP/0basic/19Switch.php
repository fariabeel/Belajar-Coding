<?php
function pheol($val) {echo $val.PHP_EOL;}
switch(2) {
    case 1:
        pheol('uno');
        break;
    case 2:
        pheol('dos');
        break;
    case 3:
        pheol('tress');
        break;
    default:
    pheol('nothin');
}
?>
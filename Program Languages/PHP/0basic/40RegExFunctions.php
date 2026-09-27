<?php
function pheol($val) {echo $val.PHP_EOL;}
function preach($val) {
    foreach($val as $key => $i) {
        if(count($val)-1 === $key) {echo $i;}
        else {echo $i." | ";}
    } echo PHP_EOL;
}

$str = 'wassup beijing';
$pattern = "/beijing/i";
pheol(preg_match($pattern,$str));

pheol(preg_match_all('/beijing/i','wassup beijing Beijing BEIJING'));
pheol(preg_replace('/, /',' | ','1, 2, 3, 4, 5'));
preach(preg_split('/sa/i','1sa2sa3sa4'));
preach(preg_grep('/^p/i',['banana','panana','pant','jokowi','prabowo','pinjol'])); #return with index still
preach(preg_grep('/^p/i',['banana','panana','pant','jokowi','prabowo','pinjol'], PREG_GREP_INVERT)); #return everything except with the pattern
pheol(preg_match('/ba(na){2}/i','Bananas'))

?> 
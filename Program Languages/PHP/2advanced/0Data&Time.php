<?php 
function pheol($val) {echo $val.PHP_EOL;}

pheol(date("Y/m/d"));
pheol(date("Y.m.d"));
pheol(date("Y-m-d"));
pheol(date("l"));

pheol(date('d'));
pheol(date('j')); #same with d
pheol(date('F')); #month name

pheol(date("Ybmbd")); #custom

pheol(date("H:i:s"));
pheol(date("H:i:s a"));

date_default_timezone_set("Asia/Jakarta");
pheol(date("Y-m-d H:i:s"));

pheol(date_default_timezone_get());

date_default_timezone_set("UTC");
pheol(date('l', mktime(0, 0, 0, 10, 3, 1975))); # h, minute, s, month, d, y
pheol(time());

pheol(date("Y-m-d H:i:s", time()));

pheol(strtotime("10:30pm November 15 2025"));
pheol(date('Y-m-d H:i:s',strtotime("10:30pm November 15 2025")));

pheol(strtotime("now"));
pheol(date('Y-m-d H:i:s',strtotime("now")));

pheol(strtotime("+5 days"));
pheol(date('Y-m-d H:i:s',strtotime("+5 days")));

pheol(strtotime("+2 weeks 4 days 2 hours 20 seconds"));
pheol(date('Y-m-d H:i:s',strtotime("+2 weeks 4 days 2 hours 20 seconds")));

pheol(strtotime("last Sunday"));
pheol(date('Y-m-d H:i:s',strtotime("last Sunday")));

pheol(date("M d"))
?>
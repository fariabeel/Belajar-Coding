<?php
function pheol($val) {echo $val.PHP_EOL;}
setcookie("custom", "it's a value", time() + (86400*30),"/");
// setcookie("custom", "arranged", time() + (86400*30),"/"); #modify
setcookie("custom", "", time() - 3600) #delete cookie
?> <!-- must defined before html tag -->

<html>
    <?php
    if (isset($_COOKIE['custom'])) {echo $_COOKIE['custom']."<br>";}
    else {echo "cookie not setted"."<br>";}
    
    if (count($_COOKIE) > 0) {echo "cookie enabled";}
    else {echo "cookie disabled";}
    ?>
</html>
<!DOCTYPE html>
<html>
    <?php 
    include "1include.php"; 

    pheol($var);
    ?>

    <?php
    include "void.php";
    echo "still work".PHP_EOL;
    ?>

    <?php
    require "void.php";
    echo "didn't work".PHP_EOL;
    ?>
</html>
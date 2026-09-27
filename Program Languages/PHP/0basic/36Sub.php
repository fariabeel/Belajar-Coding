<!DOCTYPE html>
<html>
    <?php
    function pheol($val) {echo $val.'<br>';}
    pheol($_SERVER['PHP_SELF']);
    pheol($_SERVER['SERVER_NAME']);
    pheol($_SERVER['HTTP_HOST']);
    #pheol($_SERVER['HTTP_REFERER']); #warning
    pheol($_SERVER['HTTP_USER_AGENT']);
    pheol($_SERVER['SCRIPT_NAME']);
    ?>

    <script>
        document.write('<h1>wow</h1>')
    </script>
</html>
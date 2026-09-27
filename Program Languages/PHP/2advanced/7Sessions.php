<?php
session_start();
?>

<html>
    <?php
    $_SESSION['data'] = "session data setted";
    $_SESSION['data1'] = 'session data1 setted';
    $_SESSION['data'] = 'session data changed'; #data changed
    print_r($_SESSION)
    ?>
</html>
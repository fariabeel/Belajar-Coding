<?php
session_start();
?>

<html>
    <?php
    if (isset($_SESSION['data'])) {
    echo $_SESSION['data'];

    session_unset(); #free all variables
    session_destroy(); #destroy all variables
    
    echo "<br> data erased";
    } else {
        echo 'data unsetted';
    }
    ?>
</html>
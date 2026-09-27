<!DOCTYPE html>
<html>
    <form action="37$_REQUEST.php" method="post">
        <input type="text" name="fname">
        <input type="submit" value="submit">
    </form>

    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
        <input type="text" name="fname">
        <input type="submit" value="submit">
    </form>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = htmlspecialchars($_REQUEST['fname']);
        if (empty($name)) {echo 'input is empty';}
        else {echo $name;}
    } echo "<br>";
    ?>
    <a href="37Sub.php">php file</a>
    
</html>
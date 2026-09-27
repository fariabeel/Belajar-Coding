<!DOCTYPE html>
<html>
    <form action="38$_POST.php" method='post'>
        <input type="text" name="fname">
        <input type="submit" value="submit">
    </form>

    <form action="<?php $_SERVER['PHP_SELF']?>" method='post'>
        <input type="text" name="fname">
        <input type="submit" value="submit">
    </form>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (!empty($_POST['fname'])) {echo htmlspecialchars($_POST['fname']);}
        else {echo 'empty';}
    }
    ?>
</html>
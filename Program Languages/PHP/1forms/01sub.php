<!DOCTYPE html>
<html>
    <input type="submit">
    <?php
    $str = $str0 = "";

    if(isset($_GET['fname'])) {$str = htmlspecialchars($_GET['fname']);} echo "<br>";

    if(isset($_GET['fname'])) {$str0 = safer($_GET['fname']);}
    function safer($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
        
    }
    ?>
    <!-- to avoid use htmlspecialchars() instead -->
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>">
        <input type="text" name="fname">
        <input type="submit" value="submit">
    </form>
    <?php
    echo $str."<br>";
    echo $str0;
    ?>
</html>
<!DOCTYPE html>
<html>
    <!-- 
paste it next to this browser address: "><script>alert('hacked')</script>
to hack just add "> in the next of browser address like the first example
    -->

    <input type="submit">
    <form action="<?php echo $_SERVER["PHP_SELF"]?>">
        <input type="text" name="fname">
        <input type="submit" value="submit">
    </form>
    <?php
    if(isset($_GET['fname'])) {echo htmlspecialchars($_GET['fname']);}
    ?>
</html>
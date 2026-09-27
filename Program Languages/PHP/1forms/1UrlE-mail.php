<!DOCTYPE html>
<html>
    <?php
    $nameErr = $emailErr = $websiteErr = "";
    // validate name
    if (isset($_GET["name"])) {
        $name = test_input($_GET["name"]);
    
        if (!preg_match("/^[a-zA-Z-']*$/",$name)) {
            $nameErr = 'only letters and whitespace allowed';
        }
    }

    // validate email
    if (isset($_GET["email"])) {
        $email = test_input($_GET["email"]);
    
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = 'invalid format';
        }
    }

    // validate url
    if (isset($_GET["website"])) {
        $website = test_input($_GET["website"]);
    
        if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
            $websiteErr = 'invalid url';
        }
    }


    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
        
    }
    ?>
    <form action="<?php echo test_input($_SERVER['PHP_SELF'])?>">
        <input type="text" name="name"> <br>
        <input type="email" name="email"> <br>
        <input type="url" name="url"> <br>
        <input type="submit" value="submit"> <br>
        <?php echo $nameErr?> <br>
        <?php echo $emailErr?> <br>
        <?php echo $websiteErr?> <br>
    </form>
</html>
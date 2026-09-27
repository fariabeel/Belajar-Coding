<?php
session_start()
?>

<!DOCTYPE html>

<html>
<?php
$_SESSION['data'] = 'wow';
$_SESSION['data1'] = 'wow';
print_r($_SESSION);

session_unset();
session_destroy();
?>
</html>
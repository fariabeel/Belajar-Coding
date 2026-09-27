<?php
function pheol($val) {echo $val."<br>";}

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES['random']['name']);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
if(isset($_POST['submit'])) {
    $check = getimagesize($_FILES['random']['tmp_name']);
    if($check !== false) {
        pheol("file is an image - ". $check["mime"] . ".");
        $uploadOk = 1;
    } else {
        echo "file isn't an image";
        $uploadOk = 0;
    }
}

if (file_exists($target_file)) {
    pheol("file already exists");
    $uploadOk = 0;
}

if ($_FILES["random"]['size'] > 500000) {
    echo "file too large";
    $uploadOk = 0;
}

if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != 'jpeg') {
    pheol("only jpg, png, jpeg allowed");
    $uploadOk = 0;
}

if ($uploadOk === 0) {
    echo "file not uploaded";
}
else if(move_uploaded_file($_FILES['random']['tmp_name'], $target_file)) {
    echo "the file " . htmlspecialchars(basename($_FILES["random"]['name'])) . ' has been uploaded';
} else {
    echo "error";
}
?>
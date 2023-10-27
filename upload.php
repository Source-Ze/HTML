<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
	mkdir("uploads/".rand(99999,99999999999));
    $targetDirectory = "uploads/".rand(99999,99999999999). "." ;
    $targetFile = $targetDirectory . basename($_FILES["file"]["name"]);
    $uploadSuccess = move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile);

    if ($uploadSuccess) {
        echo "successfully.";
    } else {
        echo "Error ";
    }
} else {
    echo "Invalid request.";
}
?>

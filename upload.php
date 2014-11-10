<?
error_reporting(0);



$target_path = "uploads/";
$target_path = $target_path . basename( $_FILES['userfile']['name']);  


if(exif_imagetype($_FILES['userfile']['tmp_name']) == IMAGETYPE_PNG){
	if(move_uploaded_file($_FILES['userfile']['tmp_name'], $target_path)) {
	    echo basename( $_FILES['userfile']['name']) ;
	} else {
	    echo "error1";
	}	
}elseif($_GET["remove_img"]){
	$file = $_GET["remove_img"];
	$file = str_replace(".", "", $file);
	$file = str_replace("/", "", $file);
	$file = "uploads/".$file;
	if(file_exists($file)){
		unlink($file);
	}else{
		echo "error3";	
	}
}else{
	echo "error2";
}



?>
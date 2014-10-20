<?

error_reporting(0);

$email = $_POST['email'];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$link = mysqli_connect("184.168.44.173","smartsleepdb","q@Q3w4e5r6t7y","smartsleepdb");    

	if(!mysqli_fetch_array($link->query("SELECT * FROM emails WHERE email ='".$email."'"))){
		$query = "INSERT INTO emails (email, time_added) VALUES ('".$email."', '".time()."')";
		$result = $link->query($query); 
		if(!mysqli_error($link)){
			echo "ok";
		}else{
			echo "fail: mysql";
		}
	}else{
		echo "ok: duplicate";	
	}
	
}else{
	echo "fail: wrong email";
}










?>
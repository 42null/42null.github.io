// <?php
// echo "Here are our files";
// $path = ".";
// $dh = opendir($path);
// $i=1;
// while (($file = readdir($dh)) !== false) {
//     if($file != "." && $file != ".." && $file != "index.php" && $file != ".htaccess" && $file != "error_log" && $file != "cgi-bin") {
//         echo "<a href='$path/$file'>$file</a><br /><br />";
//         $i++;
//     }
// }
// closedir($dh);
// ?>

<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?> 

</body>
</html>

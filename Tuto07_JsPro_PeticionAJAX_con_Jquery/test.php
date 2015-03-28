<?php 

#Busco una variable con el método POST llamada number
$data = $_POST['number'];

#Si  la var es == 10, imprimo mensaje, 
if($data==10)
    echo "Número es el:  ".$data;
#En caso contrario imprime otro mensaje
else
    echo "Cualquier otro número :(";
 ?>
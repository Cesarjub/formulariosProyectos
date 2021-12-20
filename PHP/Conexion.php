<?php 

class conexion {


    public function conectar() 
    {
        $hostname = "localhost"; 

        $dbname = "mydraftproject"; 
        
        $username = "root"; 
        
        $pw = ""; 

        //Conexion a la base de datos
        $dbh = new mysqli($hostname, $username, $pw, $dbname);

        return $dbh;

    }

}

?> 
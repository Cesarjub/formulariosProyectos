<?php

    include_once "./Conexion.php";

    //Instancia a la clase conexion
    $nuevaConexion = new conexion();

    //Conexion a la base de datos
    $dbh = $nuevaConexion -> conectar();

    if($dbh->connect_error)
    {
            echo json_encode ('error');
            exit();
    }
    else
    {
        //Consulta
        $sql = "SELECT * FROM `duracion`";

        //Ejecucion de la consulta
        $resultado = mysqli_query($dbh, $sql);

        //Resultado de la consulta
        $datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

        //Verificar si la consulta esta vacia
        if(!empty($datos))
            echo json_encode($datos);
        else
            echo json_encode("No se ha podido realizar la busqueda");
    }

    //Cierre de la conexion
    mysqli_close($dbh);

?>
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
    //Datos del formulario de proyectos
    $tituloProyecto  = $_POST['titulo-proyecto'];
    $tipoProyecto = $_POST['tipo-proyecto'];
    $duracionProyecto = $_POST['duracion-proyecto'];

    //Fecha actual
    $fechaProyecto = date('Y-m-d');

    //Guardar proyecto
    $sqlProyecto = "INSERT INTO `proyecto` (`nombrep`, `f_registro_proy`, 
    `idduracion`, `idtipo_investigacion`) VALUES ('$tituloProyecto', '$fechaProyecto', '$duracionProyecto', '$tipoProyecto');";

    //Obtener ultimo ID ingresado de la tabla proyectos
    if(mysqli_query($dbh, $sqlProyecto))
        $idProyecto = mysqli_insert_id($dbh);
    else
        echo json_encode ('ERROR: No se pudo guardar el proyecto.');


    echo json_encode($idProyecto);
}

//Cierre de la conexion
mysqli_close($dbh);

?>
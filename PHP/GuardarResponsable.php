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
    //Datos del formulario de responsable
    $nombreResponsable = $_POST['nombre-responsable'];
    $apellidoResponsable = $_POST['apellido-responsable'];
    $emailResponsable = $_POST['email-responsable'];
    $telefonoResponsable = $_POST['telefono-responsable'];
    $idProyecto = $_POST['idProyecto'];

    //Guardar Responsable
    $sqlResponsable = "INSERT INTO `participantes` (`nombreparticipantes`, `apellidoparticipantes`, `correo_electronico`, 
    `telefono`, `colaborador_idparticipantes`) VALUES ('$nombreResponsable', '$apellidoResponsable', '$emailResponsable', 
    '$telefonoResponsable', NULL);";

    //Obtener ultimo ID ingresado de la tabla participantes
    if(mysqli_query($dbh, $sqlResponsable)) {
        $idResponsable = mysqli_insert_id($dbh);
    }else {
        echo json_encode ('ERROR: No se pudo guardar el responsable.');
    }

    //Registrar proyecto
    $sqlRegistrar = "INSERT INTO `registrar` (`idparticipantes`, `idproyecto`) VALUES ('$idResponsable', '$idProyecto');";

    //Ejecucion de la consulta
    if($dbh->query($sqlRegistrar) != true)
        echo json_encode ('ERROR: No se pudo guardar.');

    //ID del responsable
    echo json_encode($idResponsable);
}

//Cierre de la conexion
mysqli_close($dbh);

?>
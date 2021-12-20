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
    //Datos del formulario de colaboradores
    $nombreColaborador = $_POST['nombre-colaborador'];
    $apellidoColaborador = $_POST['apellido-colaborador'];
    $emailColaborador = $_POST['email-colaborador'];
    $telefonoColaborador = $_POST['telefono-colaborador'];
    $idResponsable = $_POST['idResponsable'];
    $idProyecto = $_POST['idProyecto'];

    //Guardar Colaborador
    $sqlColaborador = "INSERT INTO `participantes` (`nombreparticipantes`, `apellidoparticipantes`, `correo_electronico`, 
    `telefono`, `colaborador_idparticipantes`) VALUES ('$nombreColaborador', '$apellidoColaborador', '$emailColaborador', 
    '$telefonoColaborador', '$idResponsable');";

    //Obtener ultimo ID ingresado de la tabla participantes
    if(mysqli_query($dbh, $sqlColaborador)) {
        $idColaborador = mysqli_insert_id($dbh);
    }

    //Registrar proyecto
    $sqlRegistrar = "INSERT INTO `registrar` (`idparticipantes`, `idproyecto`) VALUES ('$idColaborador', '$idProyecto');";

    //Ejecucion de la consulta
    if($dbh->query($sqlRegistrar) != true)
        echo json_encode ('ERROR: No se pudo guardar.');  

}

//Cierre de la conexion
mysqli_close($dbh);

?>
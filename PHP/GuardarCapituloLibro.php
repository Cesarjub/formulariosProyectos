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
    //Datos del formulario
    $idProyecto = $_POST['combo-proyecto'];
    $tituloCapitulo = $_POST['titulo-cap'];
    $nombreLibro = $_POST['nombre-cap'];
    $paginasCapitulo = $_POST['paginas-cap'];

    //Guardar producto
    $sqlProducto = "INSERT INTO `productos` (`tipo_productos`) VALUES ('Capitulo de libro');";

    //Obtener ultimo ID ingresado de la tabla producto
    if(mysqli_query($dbh, $sqlProducto)) {
        $idProducto = mysqli_insert_id($dbh);
    }else {
        echo json_encode ('ERROR: No se pudo guardar.');
    }

    //Guardar Capitulo de libro
    $sql = "INSERT INTO `cap_libro` (`cap_libro_idproductos`, `idproyecto`, `titulo_cap_libro`, `nombre_del_libro`, `numeros_paginas_cap`) 
        VALUES ('$idProducto', '$idProyecto', '$tituloCapitulo', '$nombreLibro', '$paginasCapitulo');";

    //Ejecucion de la consulta
    if($dbh->query($sql) == true)
        echo json_encode ('Los datos han sido guardados.');  
    else
        echo json_encode ('ERROR: No se pudo guardar.');

}

//Cierre de la conexion
mysqli_close($dbh);

?>
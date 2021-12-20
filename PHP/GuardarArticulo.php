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
    $tituloArticulo = $_POST['titulo-art'];
    $nombreRevista = $_POST['nombre-art'];
    $issnLibro = $_POST['issn-art'];
    $fechaArticulo = $_POST['fecha-art'];
    $paisRevista = $_POST['pais-art'];

    //Guardar producto
    $sqlProducto = "INSERT INTO `productos` (`tipo_productos`) VALUES ('Articulo');";

    //Obtener ultimo ID ingresado de la tabla producto
    if(mysqli_query($dbh, $sqlProducto)) {
        $idProducto = mysqli_insert_id($dbh);
    }else {
        echo json_encode ('ERROR: No se pudo guardar.');
    }

    //Guardar Articulo
    $sql = "INSERT INTO `articulo` (`articulo_idproductos`, `idproyecto`, `titulo_articulo`, `nombre_revista`, `issn`, 
    `f_publica_articulo`, `pais_revista`) VALUES ('$idProducto', '$idProyecto', '$tituloArticulo', '$nombreRevista', 
    '$issnLibro', '$fechaArticulo', '$paisRevista');";

    //Ejecucion de la consulta
    if($dbh->query($sql) == true)
        echo json_encode ('Los datos han sido guardados.');  
    else
        echo json_encode ('ERROR: No se pudo guardar.');

}

//Cierre de la conexion
mysqli_close($dbh);

?>
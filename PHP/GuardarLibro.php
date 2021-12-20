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
    $tituloLibro = $_POST['titulo-lib'];
    $editorialLibro = $_POST['editorial-lib'];
    $isbnLibro = $_POST['isbn-lib'];
    $lugarLibro = $_POST['lugar-lib'];

    //Guardar producto
    $sqlProducto = "INSERT INTO `productos` (`tipo_productos`) VALUES ('Libro');";

    //Obtener ultimo ID ingresado de la tabla producto
    if(mysqli_query($dbh, $sqlProducto)) {
        $idProducto = mysqli_insert_id($dbh);
    }else {
        echo json_encode ('ERROR: No se pudo guardar.');
    }

    //Guardar Libro
    $sql = "INSERT INTO `libro` (`libro_idproductos`, `idproyecto`, `titulo`, `editorial`, `isbn`, `lugar`) 
    VALUES ('$idProducto', '$idProyecto', '$tituloLibro', '$editorialLibro', '$isbnLibro', '$lugarLibro');";

    //Ejecucion de la consulta
    if($dbh->query($sql) == true)
        echo json_encode ('Los datos han sido guardados.');  
    else
        echo json_encode ('ERROR: No se pudo guardar.');

}

//Cierre de la conexion
mysqli_close($dbh);

?>
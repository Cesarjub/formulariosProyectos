
import {validarCampoVacio, validarTexto, validarComboBox, comboBoxProyectos, enviarPHP, limpiarFormulario} from './Modulo.js'

//Formularios
var formularioArticulo = document.getElementById('form-articulo')
var formularioLibro = document.getElementById('form-libro')
var formularioCapitulo = document.getElementById('form-capitulo')
var formularioTesis = document.getElementById('form-tesis')

//Detectar formulario - clic en el boton
formularioArticulo.addEventListener('submit', function(e) {
    
    //Evita que se ejecute el evento por defecto
    e.preventDefault()

    //Inputs del formulario
    var tituloArticulo = document.getElementById("titulo-art").value
    var nombreArticulo = document.getElementById("nombre-art").value
    var issnArticulo = document.getElementById("issn-art").value
    var fechaArticulo = document.getElementById("fecha-art").value
    var paisArticulo = document.getElementById("pais-art").value

    //Obtener id del combobox
    var seleccionProyecto = document.getElementById("combo-proyecto").value    

    //Validar si los campos ingresados son correctos
    if(validarCampoVacio(tituloArticulo) && validarCampoVacio(nombreArticulo) && validarCampoVacio(issnArticulo) 
        && validarTexto(paisArticulo) && validarCampoVacio(fechaArticulo) && validarComboBox(seleccionProyecto))
    {
        //Instancia - datos del formulario
        var formData = new FormData(formularioArticulo)

        //Agregar valor del comboBox
        formData.append("combo-proyecto", seleccionProyecto)

        //Enviar datos a PHP
        enviarPHP(formData, 'PHP/GuardarArticulo.php')

        //Limpiar formulario
        limpiarFormulario(formularioArticulo)        
    }
    else
        alert("Los campos ingresados son incorrectos.")

})

//////////////////////////////////////////////////////////////

//Detectar formulario - clic en el boton
formularioLibro.addEventListener('submit', function(e) {
        
    //Evita que se ejecute el evento por defecto
    e.preventDefault()

    //Inputs del formulario
    var tituloLibro = document.getElementById("titulo-lib").value
    var editorialLibro = document.getElementById("editorial-lib").value
    var isbnLibro = document.getElementById("isbn-lib").value
    var lugarLibro = document.getElementById("lugar-lib").value

    //Obtener id del combobox
    var seleccionProyecto = document.getElementById("combo-proyecto").value

    //Validar si los campos ingresados son correctos
    if(validarCampoVacio(tituloLibro) && validarCampoVacio(editorialLibro) && validarCampoVacio(isbnLibro) 
        && validarTexto(lugarLibro) && validarComboBox(seleccionProyecto)) 
    {
        //Instancia - datos del formulario
        var formData = new FormData(formularioLibro)

        //Agregar valor del comboBox
        formData.append("combo-proyecto", seleccionProyecto)

        //Enviar datos a PHP
        enviarPHP(formData, 'PHP/GuardarLibro.php')

        //Limpiar formulario
        limpiarFormulario(formularioLibro)        
    }
    else
        alert("Los campos ingresados son incorrectos.")

})

//////////////////////////////////////////////////////////////

//Detectar formulario - clic en el boton
formularioCapitulo.addEventListener('submit', function(e) {
        
    //Evita que se ejecute el evento por defecto
    e.preventDefault()

    //Inputs del formulario
    var tituloCapitulo = document.getElementById("titulo-cap").value
    var nombreCapitulo = document.getElementById("nombre-cap").value
    var paginasCapitulo = document.getElementById("paginas-cap").value

    //Obtener id del combobox
    var seleccionProyecto = document.getElementById("combo-proyecto").value

    //Validar si los campos ingresados son correctos
    if(validarCampoVacio(tituloCapitulo) && validarCampoVacio(nombreCapitulo) && validarCampoVacio(paginasCapitulo)
    && validarComboBox(seleccionProyecto))
    {
        //Instancia - datos del formulario
        var formData = new FormData(formularioCapitulo)

        //Agregar valor del comboBox
        formData.append("combo-proyecto", seleccionProyecto)

        //Enviar datos a PHP
        enviarPHP(formData, 'PHP/GuardarCapituloLibro.php')

        //Limpiar formulario
        limpiarFormulario(formularioCapitulo)
    }
    else
        alert("Los campos ingresados son incorrectos.")

})

//////////////////////////////////////////////////////////////

//Detectar formulario - clic en el boton
formularioTesis.addEventListener('submit', function(e) {
        
    //Evita que se ejecute el evento por defecto
    e.preventDefault()

    //Inputs del formulario
    var tipoTesis = document.getElementById("tipo-tesis").value

    //Obtener id del combobox
    var seleccionProyecto = document.getElementById("combo-proyecto").value

    //Validar si los campos ingresados son correctos    
    if(validarCampoVacio(tipoTesis) && validarComboBox(seleccionProyecto))
    {
        //Instancia - datos del formulario
        var formData = new FormData(formularioTesis)

        //Agregar valor del comboBox
        formData.append("combo-proyecto", seleccionProyecto)

        //Enviar datos a PHP
        enviarPHP(formData, 'PHP/GuardarTesis.php')

        //Limpiar formulario
        limpiarFormulario(formularioTesis)
    }
    else
        alert("Los campos ingresados son incorrectos.")

})

//ComboBox de proyectos
comboBoxProyectos()
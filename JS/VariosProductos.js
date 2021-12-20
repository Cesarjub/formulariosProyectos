
import {validarCampoVacio, validarTexto, validarComboBox, validarCheckBox, comboBoxProyectos, enviarPHP, 
    limpiarFormulario, ocultarElementos} from './Modulo.js'

//Formulario de productos
var formularioProductos = document.getElementById('form-productos-var')

//Secciones del formulario
var seccionArticulo = document.querySelector("#seccion-form-art")  
var seccionLibro = document.querySelector("#seccion-form-lib")  
var seccionCapitulo = document.querySelector("#seccion-form-cap")  
var seccionTesis = document.querySelector("#seccion-form-tesis")  

//CheckBox del formulario
var checkboxArticulo = document.getElementById('check-articulo')
var checkboxLibro = document.getElementById('check-libro')
var checkboxCap = document.getElementById('check-cap-libro')
var checkboxTesis = document.getElementById('check-tesis')

//Detectar cada vez que el checkBox es seleccionado
validarCheckBox(checkboxArticulo, seccionArticulo)
validarCheckBox(checkboxLibro, seccionLibro)
validarCheckBox(checkboxCap, seccionCapitulo)
validarCheckBox(checkboxTesis, seccionTesis)

//Detectar formulario - clic en el boton
formularioProductos.addEventListener('submit', function(e) {

    //Evita que se ejecute el evento por defecto
    e.preventDefault()

    //
    var checkSeleccionados = 0;
    var validarForm = 0   
    
    //Obtener id del combobox
    var seleccionProyecto = document.getElementById("combo-proyecto").value

    //Formulario de articulo
    if(checkboxArticulo.checked)
    {
        checkSeleccionados ++

        //Inputs del formulario
        var tituloArticulo = document.getElementById("titulo-art").value
        var nombreArticulo = document.getElementById("nombre-art").value
        var issnArticulo = document.getElementById("issn-art").value
        var fechaArticulo = document.getElementById("fecha-art").value
        var paisArticulo = document.getElementById("pais-art").value

        //Validar si los campos ingresados son correctos
        if(validarCampoVacio(tituloArticulo) && validarCampoVacio(nombreArticulo) && validarCampoVacio(issnArticulo) 
            && validarTexto(paisArticulo) && validarCampoVacio(fechaArticulo) && validarComboBox(seleccionProyecto))
        {
            //Instancia - datos del formulario
            var formData = new FormData(formularioProductos)

            //Agregar valor del comboBox
            formData.append("combo-proyecto", seleccionProyecto)

            //Enviar datos a PHP
            enviarPHP(formData, 'PHP/GuardarArticulo.php')

            //Limpiar formulario
            limpiarFormulario(formularioProductos)   

            //Ocultar seccion
            ocultarElementos(seccionArticulo)
        }
        else
            validarForm ++
    }

    //Formulario de libro
    if(checkboxLibro.checked)
    {
        checkSeleccionados ++

        //Inputs del formulario
        var tituloLibro = document.getElementById("titulo-lib").value
        var editorialLibro = document.getElementById("editorial-lib").value
        var isbnLibro = document.getElementById("isbn-lib").value
        var lugarLibro = document.getElementById("lugar-lib").value

        //Validar si los campos ingresados son correctos
        if(validarCampoVacio(tituloLibro) && validarCampoVacio(editorialLibro) && validarCampoVacio(isbnLibro) 
            && validarTexto(lugarLibro) && validarComboBox(seleccionProyecto)) 
        {
            //Instancia - datos del formulario
            var formData = new FormData(formularioProductos)

            //Agregar valor del comboBox
            formData.append("combo-proyecto", seleccionProyecto)

            //Enviar datos a PHP
            enviarPHP(formData, 'PHP/GuardarLibro.php')

            //Limpiar formulario
            limpiarFormulario(formularioProductos)   

            //Ocultar seccion
            ocultarElementos(seccionLibro)            
        }
        else
            validarForm ++
    }

    //Formulario de capitulo de libro
    if(checkboxCap.checked)
    {
        checkSeleccionados ++

        //Inputs del formulario
        var tituloCapitulo = document.getElementById("titulo-cap").value
        var nombreCapitulo = document.getElementById("nombre-cap").value
        var paginasCapitulo = document.getElementById("paginas-cap").value

        //Validar si los campos ingresados son correctos
        if(validarCampoVacio(tituloCapitulo) && validarCampoVacio(nombreCapitulo) && validarCampoVacio(paginasCapitulo)
        && validarComboBox(seleccionProyecto))
        {
            //Instancia - datos del formulario
            var formData = new FormData(formularioProductos)

            //Agregar valor del comboBox
            formData.append("combo-proyecto", seleccionProyecto)

            //Enviar datos a PHP
            enviarPHP(formData, 'PHP/GuardarCapituloLibro.php')

            //Limpiar formulario
            limpiarFormulario(formularioProductos)   

            //Ocultar seccion
            ocultarElementos(seccionCapitulo)   
        }
        else
            validarForm ++
    }

    //Formulario de tesis
    if(checkboxTesis.checked)
    {
        checkSeleccionados ++

        //Inputs del formulario
        var tipoTesis = document.getElementById("tipo-tesis").value

        //Validar si los campos ingresados son correctos    
        if(validarCampoVacio(tipoTesis) && validarComboBox(seleccionProyecto))
        {
            //Instancia - datos del formulario
            var formData = new FormData(formularioProductos)

            //Agregar valor del comboBox
            formData.append("combo-proyecto", seleccionProyecto)

            //Enviar datos a PHP
            enviarPHP(formData, 'PHP/GuardarTesis.php')

            //Limpiar formulario
            limpiarFormulario(formularioProductos)   

            //Ocultar seccion
            ocultarElementos(seccionTesis)   
        }
        else
            validarForm ++
    }

    if(checkSeleccionados != 0 && validarForm != 0)
        alert("Los datos ingresados no son conrrectos.")

})


//ComboBox de proyectos
comboBoxProyectos()

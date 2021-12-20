export {ocultarElementos, mostrarElementos, limpiarFormulario, validarCampoVacio, validarTexto, 
    validarTelefono, validarNumero, letraMayuscula, insertarLista, validarCheckBox, validarComboBox, 
    radioBtnDuracion, comboBoxTipoProyecto, comboBoxProyectos, enviarPHP}

//Ocultar elementos HTML
function ocultarElementos(seccion) {
    seccion.style.setProperty("display", "none")
}

//Mostrar elementos HTML
function mostrarElementos(seccion) {
    seccion.style.removeProperty('display')
}

//Limpiar inputs de formulario
function limpiarFormulario(form) {
    form.reset()
}

//Validar si los campos estan vacios
function validarCampoVacio(dato) {
    return (dato.length != 0 ? true : false)
}

//Validar si los campos contiene solo texto
function validarTexto(dato) {
    return (dato.length != 0 &&  /^[a-zA-Z]+\s*[a-zA-Z]*\s*[a-zA-Z]*$/.test(dato) ? true : false)
}

//Validar numero de telefono
function validarTelefono(dato) {
    return (/^\d{10}$/.test(dato) ? true : false)
}

//Validar numero 
function validarNumero(dato) {
    return (isNaN(dato) ? true : false)
}

//Validar Combobox
function validarComboBox(dato) {
    return (dato != 0 ? true : false)
}

//Validar CheckBox
function validarCheckBox(checkBox, seccion) {

    //Detecta cada vez que el checkBox es seleccionado
    checkBox.addEventListener( 'change', function() {

        if(this.checked)
            mostrarElementos(seccion)
        else
            ocultarElementos(seccion)
    })  
}

//Convertir primera letra en mayuscula
function letraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

//Insertar lista en HTML
function insertarLista(tipoElemento, elemento, idElemento) {

    //Crea un elemento <li>
    var lista = document.createElement(tipoElemento)

    //Insertar el contenido en el elemento
    lista.appendChild(document.createTextNode(elemento))

    //Inserta el elemento a la lista
    idElemento.appendChild(lista)
}

//Radio buttons de duracion del proyecto
function radioBtnDuracion() {

    const opciones = {
        method: "POST"
    }

    //Datos obtenidos de PHP
    fetch('PHP/RadioDuracion.php', opciones)
    .then(respuesta => respuesta.json())
    .then(resultado => {

        var contenido = ""

        //Llenado del contenido
        resultado.forEach(function(elemento) 
        {
            contenido += `<div class = "mb-2 form-check">

            <input class = "form-check-input" type = "radio" name = 
            "duracion-proyecto" id = "duracion-proyecto" value = "` + elemento['idduracion'] + `" checked>

            <label class = "form-check-label" for = "duracion-proyecto"> `
            + elemento['meses'] + " meses." + `</label>

            </div>`
        })

        //Insertar contenido en HTML
        document.getElementById("contenido-duracion-proyecto").innerHTML = contenido
    })
}


//ComboBox de tipo de proyectos
function comboBoxTipoProyecto() {

    const opciones = {
        method: "POST"
    }

    //Datos obtenidos de PHP
    fetch('PHP/ComboTipoProyecto.php', opciones)
    .then(respuesta => respuesta.json())
    .then(resultado => {    

        var contenido = ""

        contenido += "<option value = 0" + ">Selecciona una opción</option>"

        //Llenado del contenido
        resultado.forEach(function(elemento) 
        {
            contenido += "<option value = " + elemento['idtipo_investigacion']  + ">" + elemento['nombret'] + "</option>"
        })

        //Insertar contenido en HTML
        document.getElementById("tipo-proyecto").innerHTML = contenido

    })
}

//Combo box de proyectos
function comboBoxProyectos() {

    const opciones = {
        method: "POST"
    }

    //Datos obtenidos de PHP
    fetch('PHP/ComboProyectos.php', opciones)
    .then(respuesta => respuesta.json())
    .then(resultado => {

        var contenido = ""

        contenido += "<option value = 0" + ">Selecciona una opción</option>"

        //Llenado del contenido
        resultado.forEach(function(elemento) 
        {
            //Llenamos el conten
            contenido += "<option value = " + elemento['idproyecto']  + ">" + elemento['nombrep'] + "</option>"
        })

        //Insertar contenido en HTML
        document.getElementById("combo-proyecto").innerHTML = contenido
    })
}

//Enviar datos a PHP
function enviarPHP(datosFormulario, archivo) {

    fetch(archivo, {
        //Le indicamos que utilizaremos el metodo POST
        method: 'POST',
        //Mandamos los datos del formulario
        body: datosFormulario
    })

    //Recibe la informacion del PHP en formato JSON
    .then(res => res.json())
    .then(data => {

        //Imprime si se guardaron los datos  
        alert(data)
    
    })
    .catch(function(e) {
        //alert(e)
    });
}

import {ocultarElementos, mostrarElementos, limpiarFormulario, validarCampoVacio, validarTexto, 
    validarTelefono, validarComboBox, letraMayuscula, insertarLista, radioBtnDuracion, comboBoxTipoProyecto, enviarPHP} from './Modulo.js'

//Botones de secciones
const nuevoResponsable = document.querySelector("#btn-add-responsable")
const nuevoColaborador = document.querySelector("#btn-add-colaborador")

//Secciones de los formularios
var seccionProyectos = document.querySelector("#seccion-proyectos")
var seccionResponsables = document.querySelector("#seccion-responables")
var seccionColaboradores = document.querySelector("#seccion-colaboradores")

//Botones de cancelar seleccion
const cancelarResponsables = document.querySelector("#btn-cancelar-responsable")
const cancelarColaborador = document.querySelector("#btn-cancelar-colaborador")

//Formulario de responsable del proyecto
var formularioResponsables = document.getElementById('form-responsables')

//Formulario de colaboradores
var formularioColaboradores = document.getElementById('form-colaboradores')

//Formulario de proyectos
var formularioProyectos = document.getElementById('form-proyectos')

//Total de elementos en lista de colaboradores
var totalColaboradores = 0

//Array de responsable
var vecNombreResponsable = new Array()
var vecApellidoResponsable = new Array()
var vecCorreoResponsable = new Array()
var vecNumeroResponsable = new Array()

//Array de colaborador
var vecNombreColaborador = new Array()
var vecApellidoColaborador = new Array()
var vecCorreoColaborador = new Array()
var vecNumeroColaborador = new Array()

//Detecta si el boton ha sido pulsado
nuevoResponsable.addEventListener("click", function(evento) {

    //Ocultar seccion proyecto
    ocultarElementos(seccionProyectos)

    //Mostrar seccion responsable
    mostrarElementos(seccionResponsables)
});

//Detecta si el boton ha sido pulsado
cancelarResponsables.addEventListener("click", function(evento) {

    //Ocultar seccion responsables
    ocultarElementos(seccionResponsables)

    //Mostrar seccion proyecto
    mostrarElementos(seccionProyectos)

    //Limpiar formulario responsables
    limpiarFormulario(formularioResponsables)
});

//Detecta si el boton ha sido pulsado
nuevoColaborador.addEventListener("click", function(evento) {

    //Ocultar seccion colaborador
    ocultarElementos(seccionProyectos)

    //Mostrar seccion responsable
    mostrarElementos(seccionColaboradores)
});

//Detecta si el boton ha sido pulsado
cancelarColaborador.addEventListener("click", function(evento) {

    //Ocultar seccion colaborador
    ocultarElementos(seccionColaboradores)

    //Mostrar seccion proyecto
    mostrarElementos(seccionProyectos)

    //Limpiar formulario colaboradores
    limpiarFormulario(formularioColaboradores)
});

/////////////////////////////////////////////////////////////////////////////

//Detectar formulario - clic en el boton
formularioResponsables.addEventListener('submit', function(e) {

    //Evita que se ejecute el evento por defecto
    e.preventDefault();

    //Inputs del formulario de responsable
    var nombreResponsable = document.getElementById("nombre-responsable").value
    var apellidosResponsable = document.getElementById("apellido-responsable").value
    var emailResponsable = document.getElementById("email-responsable").value
    var telefonoResponsable = document.getElementById("telefono-responsable").value

    //Validar si los campos ingresados son correctos
    if(validarCampoVacio(emailResponsable) && validarTexto(nombreResponsable) && validarTexto(apellidosResponsable) 
        && validarTelefono(telefonoResponsable)) 
    {    
        //Llenado de array
        vecNombreResponsable.push(nombreResponsable)
        vecApellidoResponsable.push(apellidosResponsable)
        vecCorreoResponsable.push(emailResponsable)
        vecNumeroResponsable.push(telefonoResponsable)

        alert("El responsable ha sido agregado.")

        //Responsable del proyecto
        var responsableProyecto = letraMayuscula(nombreResponsable + " " + apellidosResponsable)

        //Lista
        var listaResponsable = document.getElementById('lista-responsable')

        //Insertar lista en HTML
        insertarLista('li', responsableProyecto, listaResponsable)

        //Ocular boton de agregar responsable
        ocultarElementos(nuevoResponsable)

        //Ocultar formulario de responsables
        ocultarElementos(seccionResponsables)

        //Ocultar formulario de proyectos
        mostrarElementos(seccionProyectos)

    }
    else
        alert("Los datos ingresados son incorrectos.")
})

/////////////////////////////////////////////////////////////////////////////

//Detectar formulario - clic en el boton
formularioColaboradores.addEventListener('submit', function(e) {

    //Evita que se ejecute el evento por defecto
    e.preventDefault();

    //Lista de responsable
    var listaResponsable = document.getElementById('lista-responsable');

    //Cantidad de descendientes de la lista de responsables
    var elementosListaResp = listaResponsable.children.length    

    //Verificar que se haya agregado un responsable
    if(elementosListaResp != 0)
    {

        //Inputs del formulario
        var nombreColaborador = document.getElementById("nombre-colaborador").value
        var apellidosColaborador = document.getElementById("apellido-colaborador").value
        var emailColaborador = document.getElementById("email-colaborador").value
        var telefonoColaborador = document.getElementById("telefono-colaborador").value    

        //Validar si los campos ingresados son correctos
        if(validarCampoVacio(emailColaborador) && validarTexto(nombreColaborador) && validarTexto(apellidosColaborador) 
            && validarTelefono(telefonoColaborador)) 
        {
            //Nombre del colaborador
            var colaboradorProyecto = letraMayuscula(nombreColaborador + " " + apellidosColaborador)

            //Lista de colaborador
            var listaColaborador = document.getElementById('lista-colaborador')

            //Insertar lista en HTML
            insertarLista('li', colaboradorProyecto, listaColaborador)  
            
            //Cantidad de descendientes de la lista de colaboradores
            var elementosListaColab = listaColaborador.children.length  

            totalColaboradores = elementosListaColab

            //Contenido de la alerta
            var contentenidoAlerta = "";

            contentenidoAlerta += `Ha agregado ` +  `<strong>` + elementosListaColab + ` de 3</strong>` + ` colaboradores.`

            alert("El colaborador ha sido agregado.")

            //Llenado de array
            vecNombreColaborador.push(nombreColaborador)
            vecApellidoColaborador.push(apellidosColaborador)
            vecCorreoColaborador.push(emailColaborador)
            vecNumeroColaborador.push(telefonoColaborador)

            //Verificar si ya se han guardado los 3 colaboradores
            if(elementosListaColab == 3)
            {
                //Ocultar boton de agregar nuevo colaborador
                ocultarElementos(nuevoColaborador)

                //Ocultar formulario de colaboradores
                ocultarElementos(seccionColaboradores)

                //Mostrar formulario de proyectos
                mostrarElementos(seccionProyectos)
            }

            //Insertar alerta en HTML
            document.getElementById("alerta-colaborador").innerHTML = contentenidoAlerta  

            //
            limpiarFormulario(formularioColaboradores)            
        }
        else
            alert("Los datos ingresados son incorrectos.")
    }
    else
        alert("Debe agregar al menos un responsable para agregar un colaborador.")

})

/////////////////////////////////////////////////////////////////////////////

//Detectar formulario - clic en el boton
formularioProyectos.addEventListener('submit', function(e) {

    //Evita que se ejecute el evento por defecto
    e.preventDefault();

    //Inputs del formulario
    var tituloProyecto = document.getElementById("titulo-proyecto").value  

    //Obtener id del combobox
    var comboBoxTipoProyecto = document.getElementById("tipo-proyecto").value 

    if(validarCampoVacio(tituloProyecto) && validarComboBox(comboBoxTipoProyecto))
    {

        //Verifica que se haya ingresado al menos un colabroador
        if(totalColaboradores != 0)
        {

            /////////////////////// Formulario de proyectos ///////////////////////

            //Instancia - datos del formulario
            var datosProyecto = new FormData(formularioProyectos)

            fetch('PHP/GuardarProyecto.php', {
                //Le indicamos que utilizaremos el metodo POST
                method: 'POST',
                //Mandamos los datos del formulario
                body: datosProyecto
            })
        
            //Recibe la informacion del PHP en formato JSON
            .then(res => res.json())
            .then(dataProyecto => {
        
                //Instancia - datos del formulario
                var formDataResponsable = new FormData()

                formDataResponsable.append("idProyecto", dataProyecto)

                //Datos del formulario de responsable
                vecNombreResponsable.forEach(function(elemento, indice) 
                {
                    //Agregar valores del formulario responsable
                    formDataResponsable.append("nombre-responsable", vecNombreResponsable[indice])
                    formDataResponsable.append("apellido-responsable", vecApellidoResponsable[indice])
                    formDataResponsable.append("email-responsable", vecCorreoResponsable[indice])
                    formDataResponsable.append("telefono-responsable", vecNumeroResponsable[indice])
                })            

                /////////////////////// Formulario de responsable ///////////////////////

                fetch('PHP/GuardarResponsable.php', {
                    //Le indicamos que utilizaremos el metodo POST
                    method: 'POST',
                    //Mandamos los datos del formulario
                    body: formDataResponsable
                })
            
                //Recibe la informacion del PHP en formato JSON
                .then(res => res.json())
                .then(data => {
            
                    /////////////////////// Formulario de colaboradores ///////////////////////

                    //Instancia - datos del formulario
                    var formDataColab = new FormData()

                    formDataColab.append("idProyecto", dataProyecto)

                    formDataColab.append("idResponsable", data)

                    //Datos del formulario de colaboradores
                    vecNombreColaborador.forEach(function(elemento, indice) 
                    {
                        //Agregar valores del formulario colaboradores
                        formDataColab.append("nombre-colaborador", vecNombreColaborador[indice])
                        formDataColab.append("apellido-colaborador", vecApellidoColaborador[indice])
                        formDataColab.append("email-colaborador", vecCorreoColaborador[indice])
                        formDataColab.append("telefono-colaborador", vecNumeroColaborador[indice])

                        //Enviar datos a PHP
                        enviarPHP(formDataColab, 'PHP/GuardarColaboradores.php')
                    })


                    //Actualizar pagina ///////////////////////////////////////
                    location.reload();

                
                })
                .catch(function(e) {
                    //alert(e)
                });

            })
            .catch(function(e) {
                //alert(e)
            });

            //
            alert("El proyecto ha sido guardado.")

        }
        else
            alert("Debe agregar al menos un responsable y un colaborador.")

    }
    else
        alert("Los datos ingresados son incorrectos.")

})

//RadioButton de duracion
radioBtnDuracion()

//ComboBox de tipo de proyecto
comboBoxTipoProyecto()
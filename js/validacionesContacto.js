const datosClientes = document.getElementById("formu");
const miFormu = document.forms["formularioContacto"];

const nombreCliente = miFormu["nombre"];
const apellidoCliente = miFormu["apellido"];
const dniCliente = miFormu["dni"];
const emailCliente = miFormu["email"];
const telefonoCliente = miFormu["telefono"];


function validarFormulario() {

    let validado = true;

    const formulario = document.forms['formularioContacto'];

    const expRegName = /^([A-Za-z][a-z]+)(\s)?([A-Za-z][a-z]+)?$/;
    const expRegApellido = /^([A-Za-z][a-z]+)(\s)?([A-Za-z][a-z]+)?$/;
    const expRegDNI = /^([0-9]{8,9})$/;
    const expRegEmail = /^(\w)+@(\w)+\.com(\.ar)?$/;
    const expRegTelefono = /^([0-9]{7,15})$/;

    const errorName = document.getElementById('errorNombre');
    const errorApellido = document.getElementById('errorApellido');
    const errorDNI = document.getElementById('errorDNI');
    const errorEmail = document.getElementById('errorEmail');
    const errorTelefono = document.getElementById('errorTelefono');


    if (nombreCliente.value === '' || !expRegName.test(nombreCliente.value)) {
        nombreCliente.style.borderColor = 'red'
        errorName.textContent = "*Por favor, completa correctamente tu nombre.";
        validado = false;
    } else {
        nombreCliente.style.borderColor = 'green';
        errorName.textContent = "";
    }

    if (apellidoCliente.value === '' || !expRegApellido.test(apellidoCliente.value)) {
        apellidoCliente.style.borderColor = 'red';
        errorApellido.textContent = "*Por favor, completa correctamente tu apellido.";
        validado = false;
    } else {
        apellidoCliente.style.borderColor = 'green';
        errorApellido.textContent = "";
    }

    if (dniCliente.value === '' || !expRegDNI.test(dniCliente.value)) {
        dniCliente.style.borderColor = 'red';
        errorDNI.textContent = "*Campo obligatorio";
        validado = false;
    } else {
        dniCliente.style.borderColor = 'green';
        errorDNI.textContent = "";
    }

    if (emailCliente.value === '' || !expRegEmail.test(emailCliente.value)) {
        emailCliente.style.borderColor = 'red';
        errorEmail.textContent = "*Campo obligatorio";
        validado = false;
    } else {
        emailCliente.style.borderColor = 'green';
        errorEmail.textContent = "";
    }

    if (telefonoCliente.value === '' || !expRegTelefono.test(telefonoCliente.value)) {
        telefonoCliente.style.borderColor = 'red';
        errorTelefono.textContent = "*Campo obligatorio";
        validado = false;
    } else {
        telefonoCliente.style.borderColor = 'green';
        errorTelefono.textContent = "";
    }
    //falta guardar los datos con create element.

    if (!validado) {
        return false;
    }

    guardarDatos();
    return false;
}

function guardarDatos() {
    const contenedor = document.createElement("div")
    const nuevoDato = document.createElement("datos")
    const titulo1 = document.createElement("div")
    const titulo2 = document.createElement("div")


    titulo1.textContent = "Formulario enviado con exito!"
    nuevoDato.textContent = "Apellido: " + apellidoCliente.value + ",  "
        + nombreCliente.value + ". Dni " + dniCliente.value + ", email "
        + emailCliente.value + " y su telefono: " + telefonoCliente.value
    titulo2.textContent = "-MS Automotores-!"


    datosClientes.appendChild(titulo1)
    datosClientes.appendChild(nuevoDato)
    datosClientes.appendChild(titulo2)


    nuevoDato.style.backgroundColor = "blue";
    nuevoDato.style.color = "white";
    nuevoDato.style.borderRadius = "1rem";
    nuevoDato.style.border = "1px solid black";
    nuevoDato.style.fontSize = "1rem";



}



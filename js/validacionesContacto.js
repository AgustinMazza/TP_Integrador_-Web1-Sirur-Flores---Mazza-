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
    const expRegEmail = /^([a-zA-Z0-9.,&#$*%+-_¡!¿?;:°|]+)+@(\w)+\.com(\.ar)?$/;
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


    if (!validado) {
        return false;
    }

    guardarDatos();
    miFormu.reset();

    return false;
}

function guardarDatos() {

    const yaexiste = document.querySelector(".datitos");
    if (yaexiste) {
        yaexiste.remove()
    }
    const nuevoDato = document.createElement("div")
    nuevoDato.classList.add("datitos");

    nuevoDato.innerHTML = "Formulario enviado con exito! <br> <br> Apellido: " + apellidoCliente.value
        + "<br>Nombre: " + nombreCliente.value
        + "<br>Dni: " + dniCliente.value
        + "<br>Email: " + emailCliente.value
        + "<br>Telefono: " + telefonoCliente.value
        + "<br> <br> -MS Automotores-";

    datosClientes.appendChild(nuevoDato);

    nuevoDato.style.backgroundColor = '#3B82F6';
    nuevoDato.style.fontFamily = 'Gill Sans';
    nuevoDato.style.color = 'white';
    nuevoDato.style.width = "80%";
    nuevoDato.style.fontWeight = 'bold';
    nuevoDato.style.display = 'flex';
    nuevoDato.style.justifyContent = 'center';
    nuevoDato.style.padding = '10px';
    nuevoDato.style.textAlign = 'center';
    nuevoDato.style.margin = 'auto';
    nuevoDato.style.borderRadius = '20px';
    nuevoDato.style.marginTop = '15px';

}
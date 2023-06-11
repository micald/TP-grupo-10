function validarFormulario(event) {
    event.preventDefault();

    let formulario = document.getElementById('miFormulario');
    let nombre = formulario.elements ['nombre'].value;
    let telefono = formulario.elements ['telefono'].value;
    let email = formulario.elements ['email'].value;
    let sugerencias = formulario.elements ['sugerencias'].value;
    
    console.log('nombre')
    if (!nombre || !email || !telefono || !sugerencias) {
        alert("Por favor, complete todos los campos.");
    }

    if (nombre.length < 3 ) {
        alert("El nombre debe tener mas de 3 caracteres.");
    }

    // Validar el formato del mail utilizando una expresión regular
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, ingrese un correo electrónico válido.");
    }

    // Validar el formato del número de teléfono utilizando una expresión regular
    let telefonoRegex = /^[0-9]{10}$/;
    if (!telefono.match(telefonoRegex)) {
        alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
    }

    
}
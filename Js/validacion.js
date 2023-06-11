document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario");
    form.addEventListener("submit", validarFormulario);

    function validarFormulario(event) {
      event.preventDefault();

      var nombre = document.forms["formulario"]["apynom"].value;
      var email = document.forms["formulario"]["email"].value;
      var domicilio = document.forms["formulario"]["domicilio"].value;
      var consulta = document.forms["formulario"]["consulta"].value;

      if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
      }

      if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
      }

      if (email.trim() === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
      }

      if (domicilio.trim() === "") {
        alert("Por favor, ingresa tu domicilio.");
        return false;
      }

      if (domicilio.length < 7) {
        alert("El domicilio debe tener al menos 7 caracteres.");
        return false;
      }

      if (consulta.trim() === "") {
        alert("Por favor, ingresa tu consulta.");
        return false;
      }

      if (consulta.length < 10) {
        alert("La consulta debe tener al menos 10 caracteres.");
        return false;
      }

      form.submit();
    }
  })
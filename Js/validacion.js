function validardatos() {
    var apellidoynombre = $("#apynom").val();
    console.log("Apellido y Nombre", apellidoynombre);
    if (apellidoynombre == "") {
        $("#mensaje1").text("Completar Nombre");
    }
    if (apellidoynombre.length < 3) {
        $("#mensaje1").text("Debe tener 3 caracteres minimo");
    }
    var domicilio = $("#domicilio").val();
    console.log("Domicilio", domicilio);
    if (domicilio.length < 7) {
        $("#mensaje2").text("Demasiado corto");
    }
    if (domicilio == "") {
        $("#mensaje2").text("Completar Datos");
    }
    var mail = $("#email").val();
    console.log("Mail", mail);
    if (mail = "/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;") {
        $("#mensaje3").text("ERROR");
    }

}
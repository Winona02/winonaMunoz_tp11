let perfil = "";

if (perfil == "administrador") {
    console.log("Usted tiene todos los privilegios de uso del sistema.");
}else if(perfil == "Administrador") {
    console.log("Usted tiene todos los privilegios de uso del sistema.");
}else if(perfil == "ADMINISTRADOR") {
    console.log("Usted tiene todos los privilegios de uso del sistema.");
}

else if (perfil == "asistente"){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
}else if (perfil == "Asistente"){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
}else if (perfil == "ASISTENTE"){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
}

else if (perfil == "invitado"){
    console.log("Usted sólo tiene permisos de consultar datos.");
}else if (perfil == "Invitado"){
    console.log("Usted sólo tiene permisos de consultar datos.");
}
else if (perfil == "INVITADO"){
    console.log("Usted sólo tiene permisos de consultar datos.");
}

else if(perfil == ""){
    console.log("Debe especificar el perfil del usuario.");
}

else{
    console.log("Debe especificar un perfil válido.");
}
let correo = document.getElementById("correo");
let mensaje = document.getElementById("descripcion");

function servicio(a){
    if(a == 1){
        mensaje.textContent = "Necesito sus servicios de: Análisis de Tendencias Personalizadas"
    }else if(a == 2){
        mensaje.textContent = "Necesito sus servicios de: Reportes de Viralidad de Contenidos"
    }else if(a == 3){
        mensaje.textContent = "Necesito sus servicios de: Optimización de Estrategias de Contenido"
    }else if(a == 4){
        mensaje.textContent = "Necesito sus servicios de: Monitoreo de Competencia"
    }else if(a == 5){
        mensaje.textContent = "Necesito sus servicios de: Visualización de Datos en Tiempo Real"
    }else if(a == 6){
        mensaje.textContent = "Necesito sus servicios de: Consultoría en Estrategia de Crecimiento"
    }
}
function enviar_correo(){
    if(correo.value && mensaje.value){
        alert("Correo Enviado "+"Correo: "+correo.value+" Descripcion: "+mensaje.value+" En unos momentos estaremos contactandolos")
    }
    else{
        alert("Favor completar todo los campos, para que sean enviados los datos")
    }
}
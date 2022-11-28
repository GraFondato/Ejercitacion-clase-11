let planejercicio = prompt("que dia es hoy?");

switch (planejercicio) {
    case "lunes":
        alert("hoy es lunes debes correr 10km");
        break;

    case "martes": 
        alert("hoy es martes de musculacion");
        break;

    case "miercoles":
        alert("hoy es miercoles debes caminar 1 hora");
        break;

    case "jueves":
        alert("hoy es jueves de musculacion");
        break;

    case "viernes":
        alert("hoy es viernes debes correr 8km");
        break;

    case "sabado":
        alert("hoy es sabado descansa!");
        break;

    case "domingo":
        alert("hoy es domingo recupera energias");
        break;

    default: 
            alert("escribe el dia de la semana en minusculas");
}

for(i=20;i<=70;i++){
    document.write("el numero es:" + i + "<br>");
}

let repeticiones = parseInt(prompt("ingrese cantidad de interacciones"));

for (i = 0 ; i < repeticiones; i++) {
    console.log("hola mundo");
}
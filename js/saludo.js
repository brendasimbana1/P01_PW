var today= new Date();
var hourNow=today.getHours();
var saludo;
console.log(today);
console.log(hourNow);

function saludo(nombre){
    if(hourNow > 18){
        saludo="Buenas noches ";
    }else if(hourNow > 12){
        saludo="Buenas tardes ";
    }else if(hourNow > 0){
        saludo="Buenos d&iacute;as ";
    }else{
        saludo="Bienvenido "
    }
    
    document.write('<h3>'+saludo +nombre+'</h3>');
}
saludo('Brenda');
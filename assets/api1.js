/*function vinculo(){
    window.open("file:///C:/Users/Natalia/Desktop/clasebit/Tallerbit/index2.html")

let nombre = document.getElementById("usuario").value;
let contraseña = document.getElementById("password").value;

if (nombre.length == 0 || contraseña.length == 0) {
    alert("los campos son obligatorios");
    return false;
}
}*/


 
function vinculo(){
    let nombre = document.getElementById("usuario").value;
    let contraseña = document.getElementById("password").value;
    
    if(nombre == 0 || contraseña == 0){
        alert("Los campos son obligatorios");
        return false;
    }
    if (nombre == "usuario1@gmail.com" && contraseña == "1234567890"){
        window.open("./index2.html")
    }
    
    else{
        alert("verifique sus datos");
    }
    
}



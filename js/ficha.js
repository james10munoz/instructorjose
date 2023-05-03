function buscar(){
    let producto = document.getElementById("nom_producto").value
    document.getElementById("respuesta").innerHTML = producto

    let gestion = document.getElementById("linea").value
    document.getElementById("consulta").innerHTML = gestion
    
    let versiones = document.getElementById("versiones").value
        document.getElementById("respuesta2").innerHTML = versiones

    let version = document.getElementById("version").value
        document.getElementById("respuesta3").innerHTML = version

    let modulo = document.getElementById("modulo").value
        document.getElementById("respuesta4").innerHTML = modulo
    }
    
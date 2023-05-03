function valortotal1(){
    let cantidad1, valor1, cantidad2, valor2;
    cantidad1 = document.getElementById("cantidad1").value
    valor1 = document.getElementById("valor1").value

    cantidad2 = document.getElementById("cantidad2").value
    valor2 = document.getElementById("valor2").value

    totaltodo1 = cantidad1*valor1
    document.getElementById("total1").innerHTML = "<div>"+ totaltodo1 +"</div>"
    totaltodo2 = cantidad2*valor2
    document.getElementById("total2").innerHTML = "<div>"+ totaltodo2 +"</div>"

    valortotal = totaltodo1 + totaltodo2
    document.getElementById("valordetodo").innerHTML = "<div>"+ valortotal +"</div>"
    }

function factura(){
    let totaltodo1, totaltodo2;
    
}
function Factura() {
    let s1, p1, c1, v1, vt1, p2, c2, v2, vt2, vt3
    s1 = document.getElementById("cantidad1").value
    document.getElementById("Valor-factura0").innerHTML =  "<div>Nombre del Subproyecto "+ s1 + "</div>"
    p1 = document.getElementById("producto1").value
    document.getElementById("Valor-factura1").innerHTML =  "<div>Nombre del producto uno "+ p1 + "</div>"
    
    c1 = document.getElementById("cantidad1").value
    document.getElementById("Valor-factura2").innerHTML = "<div>Cantidad del producto uno "+ c1 +"</div>"
    v1 = document.getElementById("valor1").value
    document.getElementById("Valor-factura3").innerHTML = "<div>Valor del producto uno "+ v1 +"</div>"
    /* vt1 = document.getElementById("Valor1").value */
    vt1 = c1*v1
    document.getElementById("Valor-factura4").innerHTML = "<div>Valor total del producto uno "+ vt1 +"</div>"


    p2 = document.getElementById("producto2").value
    document.getElementById("Valor-factura5").innerHTML =  "<div>Nombre del producto dos "+ p2 +"</div>"

    c2 = document.getElementById("cantidad2").value
    document.getElementById("Valor-factura6").innerHTML = "<div>Cantidad del producto dos "+ c2 +"</div>"
    v2 = document.getElementById("valor2").value
    document.getElementById("Valor-factura7").innerHTML = "<div>Valor producto dos "+ v2 +"</div>"
    /* vt2 = document.getElementById("Valor2").value */
    vt2 = c2*v2
    document.getElementById("Valor-factura8").innerHTML = "<div>Valor total del producto dos "+ vt2 +"</div>" 
    
    vt3 = vt1+vt2
    document.getElementById("Valor-factura9").innerHTML = "<div>Total "+ vt3 +"</div>" 

}

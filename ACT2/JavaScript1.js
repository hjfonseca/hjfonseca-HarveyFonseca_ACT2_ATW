//Estructura if

const comparacion = () => {
    const primernumero = parseInt(document.getElementById('primernumero').value);
    const segundonumero = parseInt(document.getElementById('segundonumero').value);
    const resultado = document.getElementById('resultado');

    if (primernumero > segundonumero){
        resultado.textContent= `El numero mayor es: ${primernumero}`;
    } else if (segundonumero > primernumero){
        resultado.textContent= `El numero mayor es: ${segundonumero}`;
    } else {
        resultado.textContent= `Los numeros ingresados son IGUALES`;
    }
}
document.getElementById('btncomp').addEventListener('click' , comparacion);

//Estructura Switch

const estmes = () => {
    const mescorresp = parseInt(document.getElementById('mescorresp').value);
    let month;

    switch(mescorresp) {
        case 1: month = "Enero"; break
        case 2: month = "Febrero"; break
        case 3: month = "Marzo"; break
        case 4: month = "Abril"; break
        case 5: month = "Mayo"; break
        case 6: month = "Junio"; break
        case 7: month = "Julio"; break
        case 8: month = "Agosto"; break
        case 9: month = "Septiembre"; break
        case 10: month = "Octubre"; break
        case 11: month = "Noviembre"; break
        case 12: month = "Diciembre"; break
        default: month = "No existe"; break
    }
    const mostrarmesDiv = document.getElementById('mostrarmes');
    mostrarmesDiv.textContent = `El mes correspondiente es: ${month}`;
}
document.getElementById('bntmes').addEventListener('click' , estmes );

//Gestion de arrays

const ingusuario = () => {
    const nombres = document.getElementById('nombres').value;
    const mostrarnombres = document.getElementById('mostrarnombres');
    
    if (nombres.trim() !== ""){
        const ul = document.createElement ('ul');
        const li = document.createElement ('li');
        li.textContent = nombres;
        ul.appendChild(li);
        mostrarnombres.appendChild(ul);
    }
}
document.getElementById('bntnombres').addEventListener('click' , ingusuario);
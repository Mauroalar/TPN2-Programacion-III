function $(elementos) {
    return document.getElementById(elementos);
};

function mostrarResultado(){
    const altura = $("altura");
    const peso = $("peso");

    let imc = (peso.value/Math.pow(altura.value,2));

    window.alert(`el valor es : ${imc}`);
};

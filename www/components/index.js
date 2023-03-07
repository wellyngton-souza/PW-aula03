const calcular = () =>{
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;

    let resultado = peso / (altura * altura);

    if (resultado < 18.5){
        document.querySelector("p").innerHTML = "Abaixo do peso";
    }
    
    if (resultado > 18.5 && resultado < 24.99){
        document.querySelector("p").innerHTML = "Peso normal";
    }

    if (resultado > 25 && resultado < 29.99){
        document.querySelector("p").innerHTML = "Sobrepeso";
    }

    if (resultado > 30){
        document.querySelector("p").innerHTML = "Obesidade";
    }
}

let botao = document.querySelector("button");

botao.addEventListener("click",calcular);
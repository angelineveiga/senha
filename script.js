const senha = document.getElementById("senha");

const tamanho = document.getElementById("tamanho");

const valor = document.getElementById("valor");

const gerar = document.getElementById("gerar");

const copiar = document.getElementById("copiar");

valor.textContent = tamanho.value;

tamanho.addEventListener("input", () => {

    valor.textContent = tamanho.value;

});

const MAIUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";

const NUMEROS = "0123456789";

const SIMBOLOS = "!@#$%&*()-_=+[]{}<>?/";

function gerarSenha(){

    let caracteres = "";

    if(document.getElementById("maiusculas").checked){

        caracteres += MAIUSCULAS;

    }

    if(document.getElementById("minusculas").checked){

        caracteres += MINUSCULAS;

    }

    if(document.getElementById("numeros").checked){

        caracteres += NUMEROS;

    }

    if(document.getElementById("simbolos").checked){

        caracteres += SIMBOLOS;

    }

    if(caracteres === ""){

        alert("Selecione pelo menos uma opção.");

        return;

    }

    let resultado = "";

    for(let i=0;i<tamanho.value;i++){

        resultado += caracteres.charAt(
            Math.floor(Math.random()*caracteres.length)
        );

    }

    senha.value = resultado;

}

gerar.addEventListener("click", gerarSenha);

copiar.addEventListener("click", async ()=>{

    if(!senha.value){

        return;

    }

    try{

        await navigator.clipboard.writeText(senha.value);

        alert("Senha copiada!");

    }catch{

        alert("Não foi possível copiar.");

    }

});

gerarSenha();
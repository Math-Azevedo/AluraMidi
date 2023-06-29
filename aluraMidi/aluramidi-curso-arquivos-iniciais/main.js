// CRIANDO A FUNÇÃO PARA REPRODUZIR O SOM AO CLICAR NA TELA
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio' ){
        elemento.play();    
    }
    else{
        alert('Elemento não encontrado.')
    }
    
}                                      

//AUTOMATIZANDO A FUNCIONALIDADE, TRABALHANDO COM LISTAS DE ELEMENTOS SELECIONANDO TODOS OS BOTÕES DE UMA VEZ

//atribuindo a nossa lista de teclas dentro da variavel listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');
document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    //verificando o seletor da classe dos sons atraves do class list, como há uma classe tecla antes da Tecla(e o nome da tecla), utilizamos o [1] para puxar a informação do id Do nome da tecla.
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //utilizando o template string 
    //console.log(idAudio);

    //atribuindo uma função anonima para conseguir passar parametros na funcao tocaSom()
    tecla.onclick = function (){
        tocaSom(idAudio);
    };
    //console.log(contador);

    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
           tecla.classList.add('ativa'); 
        }       
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
   
}



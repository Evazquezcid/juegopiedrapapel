const PIEDRA ="piedra";
const PAPEL ="papel";
const TIJERA ="tijera";


const TIE = 0;
const WIN = 1;
const LOST = 2;


let isPlaying = false;



//recoge los botones y el texto
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("texto-empezar");
const machineImg = document.getElementById("machine-img"); // recogemos las imagenes de la maquina
const userImg = document.getElementById("user-img"); // recogemos la imagen del usuario

//a cada uno le añadimos un addEventlistener
                             //el evento es un click
piedraBtn.addEventListener("click", ()=>{
   play(PIEDRA)
});

papelBtn.addEventListener("click", ()=>{
    play(PAPEL)
   });


tijeraBtn.addEventListener("click", ()=>{
    play(TIJERA)
});



// hacemos formula jugar y le metemos la opcion que ha elegido el jugador

function play (userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" +userOption+ ".png";  // esto hace que la imagen 
    //se cambie de parte del usuiario
    resultText.innerHTML = "JUGANDO!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        console.log(machineOption);
        machineImg.src = "img/" + machineOption + ".png";
    }, 200);

   setTimeout(function (){

    clearInterval(interval);
    
    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption)
  
    switch (result) {
        case TIE:
            resultText.innerHTML = "¡EMPATE!";
            break;
        case WIN:
            resultText.innerHTML = "¡TU GANAS!";
            break;
        case LOST:
            resultText.innerHTML = "¡HAS PERDIDO!";
            break;
    }
       isPlaying = false;
   },2000); 

}

// AQUI CAMBIAMOS EL NOMBRE POR UN NUMERO PARA QUE MUESTRE LA IMAGEN ,PARSEADO!!
function calcMachineOption() {
  const number =  Math.floor(Math.random() * 3);
  switch (number) {
    case 0 :
        return PIEDRA;
    case 1:
        return PAPEL;
    case 2:
        return TIJERA;
  }
}


//hacemos una funcion con todos los resultados posibles
function calcResult(userOption, machineOption) {
    machineImg.src = "img/" + machineOption + ".png";
   if (userOption === machineOption){ 
      return TIE;

   } else if (userOption === PIEDRA){

        if (machineOption === PAPEL ) return LOST;
        if (machineOption === TIJERA) return WIN;

   } else if ( userOption === PAPEL ){
        if (machineOption === PIEDRA ) return WIN;
        if (machineOption === TIJERA) return LOST;
   
    }else if ( userOption === TIJERA ){
        if (machineOption === PIEDRA ) return LOST;
        if (machineOption === PAPEL) return WIN;
    }
}
const sonic = document.querySelector(".sonic");
const pipe = document.querySelector(".pipe-game");
const eggman = document.querySelector('.eggman');
const tails = document.querySelector('.tails');
const imgBackOne = document.querySelector('#img1');
const ValorContador = document.querySelector('#valor')
const jumps = document.querySelector('#jumps');
const anel = document.querySelector('#anel');
const aneisValor = document.querySelector('#aneis');
let contador = 0;
let pulos = 0; 
let aneis = 0;
let sonicImune = 0;
const jump = () => {
  pulos++;
  sonic.classList.add("jump-sonic");
  jumps.textContent = `Jups: ${pulos}`
  setTimeout(() => {
    sonic.classList.remove("jump-sonic");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  const anelPosition = anel.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80 && sonicImune == 0) {
    imgBackOne.style.animation = "none";

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    sonic.style.animation = "none";
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = "./Images/sonic/sonic/sonic-over.gif";
    sonic.style.width = "75px";
    sonic.style.marginLeft = "45px";
    sonic.style.zIndex = "9999";

    /*eggman.style.position = 'absolute'
    eggman.style.marginLeft = `200px`
    eggman.style.bottom = '0';
    eggman.style. */
    eggman.className = 'eggmanHehe'
    eggman.src = './Images/sonic/eggman/eggman-hehe.gif';
    tails.src= './Images/sonic/tails/tails-over.gif';
    tails.style.bottom = '0';
    tails.style.zIndex = '99'

    clearInterval(loopGame);
  }
  else{ 
    contador++;
    ValorContador.textContent = `${contador}`}

  if (anelPosition <= 30 && anelPosition > 0 && marioPosition < 80) {
    aneis++;
    aneisValor.textContent = `Anéis: ${aneis}`
    transformation();
    setTimeout(() =>{
      sonicImune = 0;
    }, 100)
    sonicImune = 0;
  }
}, 10);

const transformation = () => {
  sonic.classList.add("sonic-transformation");
  sonic.src = './Images/sonic/sonic/sonic-transformation.gif'
  setTimeout(() => {
    sonic.src = './Images/sonic/sonic/sonic-speed.gif'
    eggman.style.marginRight = `400px`
    sonic.style.marginLeft = "400px"
    pipe.style.animation = 'pipe-animation 0.7s infinite linear'
    imgBackOne.style.animation = 'animation: clouds-animation 0.5s infinite linear;'
    tails.src = './Images/sonic/tails/tails-fasted.gif'
    tails.style.marginLeft = '200px';
    setTimeout(() => {mario.classList.remove("sonic-transformation");
    sonic.className = 'sonic'
    sonic.src = './Images/sonic/sonic/sonic-running.gif'
    sonicImune =1;
    anel.style.animation = 'none'}, 5000)
  },1000 ); } /*
  setTimeout(() => {
 
  mario.classList.remove("sonic-transformation");
  mario.className = 'sonic'
  mario.src = './Images/sonic/sonic/sonic-running.gif'
  sonicImune =1;
  anel.style.animation = 'none'
  }, 5000); 
}; */
document.addEventListener("keydown", jump);

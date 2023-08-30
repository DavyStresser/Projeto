const mario = document.querySelector('.mario');
const pipe = document.querySelector('pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    console.log(marioPosition);
    
    if(pipePosition <=120 && pipePosition > 0 && marioPosition < 80 ) {
    
        pipe.style.animation = 'nome';
        pipe.style.animation = `${pipePosition}px`;
        
        mario.style.animation = 'nome';
        mario.style.bottom = `${pipePosition}px`;
        
        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marioLeft = '50px'

        clearInterval(loop);
    
    }

}, 10);

document.addEventListener('keydown', jump)

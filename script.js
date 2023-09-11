const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const playAgain = document.querySelector('.again');

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(
        window.getComputedStyle(mario).bottom.replace('px', '')
    );

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        console.log('entrei aqui');
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagem/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        let game = document.createElement('button');
        game.textContent = 'Play Again';
        playAgain.appendChild(game);
        game.addEventListener('click', () => {
            location.reload(); // Recarrega a página para reiniciar o jogo
        });

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
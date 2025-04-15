
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  if (!mario.classList.contains('jump')) {
    mario.classList.add('jump');

    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500); // tempo igual à duração da animação
  }
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseInt(
    window.getComputedStyle(mario).bottom.replace('px', '')
  );

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);




























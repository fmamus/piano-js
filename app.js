window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
});

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const blackKey = document.querySelector(`.black-keys[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    blackKey.classList.add('active-black');
});

function removeTransition(e){
    this.classList.remove('active');
}

function removeTransitionBlack(e){
    this.classList.remove('active-black');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const blackKeys = document.querySelectorAll('.black-keys');
blackKeys.forEach(blackKey => blackKey.addEventListener('transitionend', removeTransitionBlack));

//show info
const infoText = document.querySelector('#info');

infoText.addEventListener('click', function(){
    const info = document.querySelector('.info');
    if(info.style.display === 'none')
    info.style.display = 'block';
    else{
        info.style.display = 'none';
    }
});
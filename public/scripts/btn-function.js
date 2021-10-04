const btnPlay = document.querySelector('button[data-btn="play"]');
const btnPause = document.querySelector('button[data-btn="pause"]');
const btnStop = document.querySelector('button[data-btn="stop"]');

function btnClick(option){
    if(option == 'play'){
        btnPlay.classList.remove('active');
        btnPause.classList.add('active');
        btnStop.classList.add('active');
    }
    if(option == 'pause'){
        btnPlay.classList.add('active');
        btnPause.classList.remove('active');
    }
    if(option == 'stop'){
        btnPlay.classList.add('active');
        btnPause.classList.remove('active');
        btnStop.classList.remove('active');
    }
}
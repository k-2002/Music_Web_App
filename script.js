/*shree ganeshay namh:*/


let audioElement = new Audio("songs/1.mp3");
let songindex =0;
let myprogressBar = document.getElementById('range');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname:"Falak Tak.....",filepath:"songs/1.m4a",coverpath:"cover/cover1.jpg"},
    {songname:"Agar tum sath...",filepath:"songs/2.mp3",coverpath:"cover/cover2.jpg"},
    {songname:"Behati Havasa tha...",filepath:"songs/3.mp3",coverpath:"cover/cover3.jpg"},
    {songname:"Boom Boom...",filepath:"songs/4.mp3",coverpath:"cover/cover4.jpg"},
    {songname:"Daru badnam...",filepath:"songs/5.mp3",coverpath:"cover/cover5.jpg"},
    {songname:"Dekha hajaro dafa...",filepath:"songs/6.mp3",coverpath:"cover/cover6.jpg"},
    {songname:"Lagi re Lagi Tari Dhun Lagi...",filepath:"songs/7.mp3",coverpath:"cover/cover7.jpg"},
    {songname:"Kaho Punam na Chand ne... ",filepath:"songs/8.mp3",coverpath:"cover/cover8.jpg"},
    {songname:"AP Dhilon Dil Vade...",filepath:"songs/9.mp3",coverpath:"cover/cover9.jpg"},
    {songname:"Sari Umer Ham Mar Mar ke ji liye... ",filepath:"songs/10.mp3",coverpath:"cover/cover10.jpg"},
    
];





masterPlay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

});

audioElement.addEventListener('timeupdate',() => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
});

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
});

let makeallPlays =()=>{
   
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeallPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songindex+1}.mp3`;
        mastersongName.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=10)
    {
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongName.innerText = songs[songindex].songname;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex = 0;
    }
    else{
        songindex -= 1;
    }
  
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongName.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

songitem.forEach((element,i) =>{
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songname;
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
});
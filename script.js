console.log("Welcome to Spotify")
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from( document.getElementsByClassName("songItem"));


let songs = [
    {songName: "Song_NCS_1", filePath: "song/1.mp3", coverPath: "img/1.jpg"},
    {songName: "Song_NCS_2", filePath: "song/3.mp3", coverPath: "img/3.jpg"},
    {songName: "Song_NCS_3", filePath: "song/2.mp3", coverPath: "img/2.jpg"},
    {songName: "Song_NCS_4", filePath: "song/4.mp3", coverPath: "img/4.jpg"},
    {songName: "Song_NCS_5", filePath: "song/5.mp3", coverPath: "img/5.jpg"},
    {songName: "Song_NCS_6", filePath: "song/6.mp3", coverPath: "img/6.jpg"},
    {songName: "Song_NCS_7", filePath: "song/7.mp3", coverPath: "img/7.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play()


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = 'icons/forward.svg';
        gif.style.opacity = 1;
    }
    else{  audioElement.pause();
        masterPlay.src = 'icons/play.svg'; 
        gif.style.opacity = 0;
    }
}) 
// Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
    // update Seekbar
    progress = Number.parseInt((audioElement.currentTime/audioElement.duration)*100) 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.src ='icons/play.svg';
    })
}

Array.from( document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPays();
        songIndex = parseInt(e.target.id);
        e.target.src.remove = 'icons/play.svg';
        e.target.src.add = 'icons/forward.svg';
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.src = 'icons/forward.svg';

    })
})

document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'icons/forward.svg';
})

document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex<=7){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'icons/play.svg';
})
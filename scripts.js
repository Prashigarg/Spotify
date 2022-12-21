console.log("Welcome to Spotify 2.0");
let songindex = 0;
let audioElement = new Audio('https://pwdown.info/13016/Backbone%20-%20Harrdy%20Sandhu.mp3');
let masterplay = document.getElementById('masterplay');
let PlayBar = document.getElementById('PlayBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname: "Backbone", filePath: "/https://pwdown.info/13016/Backbone%20-%20Harrdy%20Sandhu.mp3", coverPath: "https://a10.gaanacdn.com/images/albums/95/1836595/crop_480x480_1836595.jpg"},
    {songname: "Waalian", filePath: "https://remixbooth.in/download/waalian-remix?q=320.mp3", coverPath: "https://c.saavncdn.com/176/Waalian-Punjabi-2020-20220804080504-500x500.jpg"},
    {songname: "Passori", filePath: "https://pwdown.info/113604/Pasoori%20-%20Shae%20Gill.mp3", coverPath: "http://c.saavncdn.com/663/Pasoori-Punjabi-2022-20220203181058-500x500.jpg"},
    {songname: "Patola", filePath: "https://pwdown.info/14654/Patola%20-%20Guru%20Randhawa%20Bohemia.mp3", coverPath: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1201404770.jpg"},
    {songname: "Rabba", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Heropanti/Rabba%20128%20Kbps.mp3", coverPath: "https://media.lyricsmint.com/photos/6994/rabba-heropanti-1_cover.jpg"},
    {songname: "Sakhiyaan By Maninder Buttar", filePath: "https://pwdown.info/14671/Sakhiyaan%20-%20Maninder%20Buttar.mp3", coverPath: "https://a10.gaanacdn.com/images/albums/68/2249968/crop_480x480_1540031665_2249968.jpg"},
    {songname: "Desi Boyz", filePath: "https://pagalnew.com/download128/7440", coverPath: "https://c.saavncdn.com/743/Desi-Boyz-Hindi-2011-20221212015731-500x500.jpg"},
    {songname: "Love Dose", filePath: "https://pwdown.info/8555/02%20Love%20Dose%20(Desi%20Kalakaar)%20Yo%20Yo%20Honey%20Singh.mp3", coverPath: "https://i1.sndcdn.com/artworks-000105585636-zybqal-t500x500.jpg"},
    {songname: "woh Din", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Chhichhore/Woh%20Din%20-%20Chhichhore%20128%20Kbps.mp3", coverPath: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_980816092.jpg"},
    {songname: "Khaab", filePath: "https://dl1.axofile.xyz/ddl/a06dfa8780ab378f5ffd805ddb254a1c/amitmusic+wapaxo+com/Khaab.mp3", coverPath: "https://c.saavncdn.com/594/Khaab-Punjabi-2016-500x500.jpg"},
]
songitem.forEach((element,i)=>{
    //console.log(element , i);
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    Play = parseInt((audioElement.currentTime/audioElement.duration)*100);
    PlayBar.value = Play;
})
PlayBar.addEventListener('change',()=>{
    audioElement.currentTime=PlayBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
          
          makeAllPlays();
          songindex = parseInt(e.target.id);
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
          audioElement.src= 'https://pagalnew.com/download128/7440';
          mastersongname.innerText = song[songindex].songname;
          audioElement.currentTime = '0';
          audioElement.play();
          masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
    songindex =0;}
    else{
        songindex +=1;
    }
    audioElement.src= '';
          audioElement.currentTime = '0';
          mastersongname.innerText = song[songindex].songname;
          audioElement.play();
          masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<0){
    songindex =0;}
    else{
        songindex -=1;
    }
          audioElement.src= '${songindex+1}';
          mastersongname.innerText = song[songindex].songname;
          audioElement.currentTime = '0';
          audioElement.play();
          masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
})
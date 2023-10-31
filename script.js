console.log("welcome to spotify")

let pp= document.getElementById('masterPlay');
let gif=document.getElementById('gif')
let progressBar = document.getElementById('myProgressBar')
let songIndex=0;
let songItems = Array.from(document.getElementsByClassName('songItem'))
console.log(songItems)
let sidePlay=Array.from(document.getElementsByClassName('sidePlay')
)


const allplay=()=>{
    sidePlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
     })
        
}


let songs =[
    {songName:'warriyo',filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName:'circle',filePath:'songs/2.mp3', coverPath:'covers/2.jpg'},
    {songName:'Deaf kev',filePath:'songs/3.mp3', coverPath:'covers/3.jpg'},
    {songName:'Different Heaven',filePath:'songs/4.mp3', coverPath:'covers/4.jpg'},
    {songName:'Janji heroes',filePath:'songs/5.mp3', coverPath:'covers/5.jpg'},
    {songName:'rabba',filePath:'songs/6.mp3', coverPath:'covers/6.jpg'},
    {songName:'hukum',filePath:'songs/7.mp3', coverPath:'covers/7.jpg'},
    {songName:'makeba',filePath:'songs/8.mp3', coverPath:'covers/8.jpg'},{songName:'Danza-Kudero',filePath:'songs/9.mp3', coverPath:'covers/9.jpg'},
    {songName:'Cest la vide',filePath:'songs/10.mp3', coverPath:'covers/10.jpg'}
]
songItems.forEach((element,i) => {
    document.getElementsByTagName("img")[i+1].src=songs[i].coverPath;
    
    document.getElementsByClassName('songName')[i].innerText=songs[i].songName
});
const audio = new Audio(songs[0].filePath)

pp.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        pp.classList.remove('fa-play-circle')
        pp.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }else{
        audio.pause();
        pp.classList.remove('fa-pause-circle')
        pp.classList.add('fa-play-circle')
        gif.style.opacity=0;
    }
    sidePlay.forEach((element,i)=>{
        
        if(i==songIndex){
            element.classList.remove('fa-play-circle')
            element.classList.add('fa-pause-circle')
        }
     })

})

audio.addEventListener('timeupdate',()=>{
   let progress=parseInt((audio.currentTime/audio.duration)*100)
   
progressBar.value=progress
})
progressBar.addEventListener('click',()=>{
    let val=progressBar.value;
    let audioValue=val*audio.duration/100
    audio.currentTime=audioValue
})

sidePlay.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
      

         if((audio.paused || audio.currentTime<=0 )){
            allplay()
            songIndex=parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-pause-circle')
           audio.src=songs[i].filePath
           audio.currentTime=0
            audio.play()
            pp.classList.remove('fa-play-circle')
            pp.classList.add('fa-pause-circle')
            gif.style.opacity=1;
            document.getElementById('masterSongName').innerText=songs[i].songName
        }
    
        else{
            allplay()
            audio.pause();
            pp.classList.remove('fa-pause-circle')
            pp.classList.add('fa-play-circle')
            gif.style.opacity=0;
        }
    })
})

document.getElementById('previous').addEventListener("click",()=>{
if(songIndex<=0){
    songIndex=9;
}else{
    songIndex-=1;
}
audio.src=songs[songIndex].filePath;
audio.play()
pp.classList.remove('fa-play-circle')
 pp.classList.add('fa-pause-circle')
 document.getElementById('masterSongName').innerText=songs[songIndex].songName
 sidePlay.forEach((element,i)=>{
    if(i==songIndex){
        allplay()
        element.classList.remove('fa-play-circle')
        element.classList.add('fa-pause-circle')
    }
 })
})
document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audio.src=songs[songIndex].filePath;
    audio.play()
    pp.classList.remove('fa-play-circle')
     pp.classList.add('fa-pause-circle')
     document.getElementById('masterSongName').innerText=songs[songIndex].songName
     sidePlay.forEach((element,i)=>{
        if(i==songIndex){
            allplay()
            element.classList.remove('fa-play-circle')
            element.classList.add('fa-pause-circle')
        }
     })
    })


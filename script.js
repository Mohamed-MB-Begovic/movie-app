const btnWatch=document.querySelector('.watch')
const videoContainer=document.querySelector('.video-container')
const video=document.querySelector('.video')
const trailer=document.querySelector('.trailer')
const trailerVid=document.querySelector('.video-player')

btnWatch.addEventListener('click',()=>{
    videoContainer.classList.toggle('hidden');
})
videoContainer.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('video')){
    videoContainer.classList.remove('hidden');
    trailerVid.classList.remove('hidden')
    video.pause();
    video.currentTime=0
    }
})
trailerVid.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('trailer')){
    trailerVid.classList.remove('hidden')
    trailer.pause();
    trailer.currentTime=0
    }
})
// 
// 
const boxContainer=document.querySelector('.boxes')
const box=document.querySelectorAll('.box')
// 
const playBtn=document.querySelectorAll('.play')
playBtn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
       const title= e.target.parentElement.querySelector('.name')
    //    console.log(title.textContent)
       const img=e.target.parentElement.parentElement.querySelector('img[data-vid]').dataset.vid
    trailer.src=img;
    trailerVid.classList.toggle('hidden');
    })
})


// AIzaSyDuBy13eR1AyuhXPeHFhfDE28_VdZ7LtpM



















// const boxContainer=document.querySelector('.boxes')
// const imgpath='https://image.tmdb.org/t/p/w500';
// const url='https://api.themoviedb.org/3/discover/movie?api_key='
// const key='a2c6411fa0f7055781ed8571819d1bc3'
// fetch(url+key).then((resp)=>{
//    return resp.json()
// }).then((data)=>{
//     console.log(data.results)
//     const special=data.results.slice(0,5)
//     renderMovie(special,0)
//     renderMovie(special,1)
//     renderMovie(special,2)
//     renderMovie(special,3)
//     
// })
// 
// const renderMovie=(special,movieNum)=>{
//     boxContainer.innerHTML+=
//     ` <div class="box">
//     <img src="${imgpath+special[movieNum].poster_path}" alt="image">
//     <div class="details">
//         <div class="detail">
//             <h2>${special[movieNum].title}</h2>
//         <p>action</p>
//         </div>
//     <ion-icon name="play-circle-outline"></ion-icon>
//     </div>
// </div>
//  <div class="buttons">
//     <ion-icon name="play-circle-outline" class="btn-left"></ion-icon>
//     <ion-icon name="chevron-forward" class="btn-right"></ion-icon>        
// </div>`;
// };



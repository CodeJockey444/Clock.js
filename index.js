window.onload=()=>{
    let nightBtn = document.getElementById('nightBtn');
let root =  document.querySelector(':root');
nightBtn.addEventListener('click',()=>{
   root.style.setProperty('--background-color','rgb(54, 54, 54)');
   root.style.setProperty('--color','white');
   root.style.setProperty('--banner-bg','#343736');
})

let dayBtn = document.getElementById('dayBtn');
dayBtn.addEventListener('click',()=>{
    root.style.setProperty('--background-color','#fbfaff');
    root.style.setProperty('--color','rgb(54, 54, 54)');
    root.style.setProperty('--banner-bg','rgb(165, 81, 233)')
})

let likeBtn = document.getElementById('likeBtn');
likeBtn.addEventListener('click',()=>{
    let badge=document.querySelector('.badger');
    let newCont = String(Number.parseInt(badge.textContent)+1);
    badge.textContent=newCont;
})

setInterval(timeDisplay,500)
function timeDisplay(){
    let timeDisplayed = document.getElementById('time');
    let time =  new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    document.querySelector('#message').textContent=hours < 12 ? 'Good morning':hours < 19 ?'Good Evening':'Good night';
    timeDisplayed.innerHTML = `${hours} : ${minutes} : ${seconds} `
    document.querySelector('#greeting').textContent=hours < 12 ? 'Wish you a very productive day':hours < 19 ?'Enjoy you evening' : 'Sweet dreams'
}
}
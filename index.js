barger=document.querySelector('.barger');
navbar=document.querySelector('.navbar');
rightNav=document.querySelector('.rightNav');
navlist=document.querySelector('.nav-list');

barger.addEventListener('click',()=>{
rightNav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})
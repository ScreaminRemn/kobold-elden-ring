
const menu=document.querySelector('.menu-button');const sidebar=document.querySelector('#sidebar');if(menu&&sidebar){menu.addEventListener('click',()=>sidebar.classList.toggle('open'));document.addEventListener('click',e=>{if(window.innerWidth<=900&&sidebar.classList.contains('open')&&!sidebar.contains(e.target)&&e.target!==menu)sidebar.classList.remove('open')})}

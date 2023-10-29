const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
        document.getElementById("nav").style.display = "block";
    }, 2000);
})

document.getElementById("nav").style.display = "none";
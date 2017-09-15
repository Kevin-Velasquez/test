let btn = document.querySelector("#btn");
let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");

btn.addEventListener("click", function(){
    alert(Date());
});

leftBtn.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(https://wallpaperbrowse.com/media/images/eiffel-tower-wallpaper-18.jpg)"
});

rightBtn.addEventListener("click", function(){
    alert(window.location.href);
});
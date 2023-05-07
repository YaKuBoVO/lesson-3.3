elDarkLightBtn = document.querySelector('#dark-light-btn'); 

elDarkLightBtn.addEventListener('click', function() {
   document.body.classList.toggle('dark');
})


IconMenu = document.querySelector(".icon-menu");
IconMenu.onclick = function() {
   navbarList = document.querySelector(".navbar-list");
   navbarList.classList.toggle("active");
}
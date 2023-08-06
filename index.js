

   // Get references to the menu icon and the menus
   const menuIcon = document.getElementById('menu-button');
   const menus = document.querySelector('.menus-mobile');
 
   
   // Function to toggle the visibility of the menus
   function toggleMenus() {
     menus.classList.toggle('hidden');
 }
 
   // Add a click event listener to the menu icon
   menuIcon.addEventListener('click', toggleMenus);


   // Function to open the right sidebar
document.getElementById("open-menu").addEventListener("click", function () {
  document.querySelector(".right-sidebar").removeAttribute("hidden");
});

// Function to close the right sidebar
document.getElementById("close-menu").addEventListener("click", function () {
  document.querySelector(".right-sidebar").setAttribute("hidden", true);
});

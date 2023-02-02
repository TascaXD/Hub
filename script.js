let menus = document.querySelectorAll('.desafios-menu');
let icons = document.querySelectorAll('.menu-icon');

icons.forEach((icon, index) => {
  icon.addEventListener('click', function(){
    let targetMenu = menus[index];
    if(targetMenu.style.display === "none"){
      targetMenu.style.display = "block";
      icon.innerHTML = "⇩";
    } else {
      targetMenu.style.display = "none";
      icon.innerHTML = "⇨";
    }
  });
  icon.addEventListener('mouseenter', function(){
    icon.style.cursor = "pointer";
    icon.style.color = "blue";
  });

  icon.addEventListener('mouseleave', function(){
    icon.style.color = "white";
  });
});

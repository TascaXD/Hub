<script>
let menu = document.querySelector('#desafios-menu');
let icon = document.querySelector('#menu-icon');

icon.addEventListener('click', function(){
  if(menu.style.display === "none"){
    menu.style.display = "block";
    icon.innerHTML = "⇩";
  } else {
    menu.style.display = "none";
    icon.innerHTML = "⇨";
  }
});
icon.addEventListener('mouseenter', function(){
  icon.style.cursor = "pointer";
  icon.style.color = "blue";
});

icon.addEventListener('mouseleave', function(){
  icon.style.color = "black";
});
    </script>

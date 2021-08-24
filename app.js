var menulink = document.getElementById('menulink');
menulink.style.maxHeight = '0px';

function toggle(){
  if(menulink.style.maxHeight == '0px'){
    menulink.style.maxHeight = '200px';
  } else {
    menulink.style.maxHeight = '0px';
  }
}

  window.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    })
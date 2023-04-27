window.addEventListener("scroll", function (){
  var header =this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);  
})

function toogle(){
  var header = document.querySelector("header");
  header.classList.toggle("active");
}
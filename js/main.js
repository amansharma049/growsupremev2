
setInterval(function() {
    document.getElementById("right_slider").click();
  }, 5000);
  
  // slide gallery
  let sliderRight = document.querySelector("#right_slider");
  let sliderLeft = document.querySelector("#left_slider");
  let images = document.querySelectorAll(".single_img");
  
  imgNumber = 0;
  
  sliderRight.addEventListener("click", function () {
    images.forEach((image) => {
      image.style.display = "none";
    });
    imgNumber++;
    if (imgNumber === images.length) {
      imgNumber = 0;
    }
    images[imgNumber].style.display = "block";
  });
  
  sliderLeft.addEventListener("click", function () {
    images.forEach((image) => {
      image.style.display = "none";
    });
    imgNumber--;
    if (imgNumber === -1) {
      imgNumber = images.length - 1;
    }
    images[imgNumber].style.display = "block";
  });
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("slider_section").style.marginTop = 0;
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.background = "#fff";
        document.getElementById("navbar").style.boxShadow = "1px 5px 15px #ccc";
        document.getElementById("navbar-link").style.color = "black";
        document.getElementById("navbar-link1").style.color = "black";
        document.getElementById("navbar-link2").style.color = "black";
        document.getElementById("navbar-link3").style.color = "black";
        document.getElementById("navbar-link4").style.color = "black";
        document.getElementById("navbar-logo").style.color = "black";
        document.getElementById("links").style.background = "rgba(255, 255, 255, 0.9)";


    // document.getElementById("links").style.backgroundColor = "white";
    // document.getElementById("navbar").style.boxShadow = "1px 10px 15px #ccc";
  }else{
    document.getElementById("slider_section").style.marginTop = "-75px";
    document.getElementById("navbar").style.position = "sticky";
    document.getElementById("navbar-link").style.color = "#ccc";
    document.getElementById("navbar-link1").style.color = "#ccc";
    document.getElementById("navbar-link2").style.color = "#ccc";
    document.getElementById("navbar-link3").style.color = "#ccc";
    document.getElementById("navbar-link4").style.color = "#ccc";
    document.getElementById("navbar-logo").style.color = "#ccc";
    document.getElementById("links").style.background = "rgba(0, 0, 0, 0.9)";

    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
    // document.getElementById("navbar").style.backgroundColor = "transparent";
    // document.getElementById("links").style.backgroundColor = "transparent";
    // document.getElementById("navbar").style.boxShadow = "none";

  }
}

function nav(){
  document.getElementById("links").classList.toggle('Navactive');
  // document.getElementById("nav-bar").style.display="none";
  // document.getElementById("nav-barclose").style.display="block";
}


// counter number
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current == end) {
                  clearInterval(timer);
              }
          }, step);
  }
  counter("count1", 0, 1, 1000);
  counter("count2", 0, 4, 2000);
  // counter("count3", 0, 0, 3000);
  // counter("count4", 0, 0, 3000);
});






   
 
    var images = [
      "background4.jpg",
      "background2.jpg",
      "background3.jpg",
    ];
    var currentIndex = 0;
    var bgImage = document.querySelector(".bg-image");

    function changeBackgroundImage() {
      currentIndex = (currentIndex + 1) % images.length;
      bgImage.style.opacity = 0;
      setTimeout(function () {
        bgImage.style.backgroundImage = 'url("' + images[currentIndex] + '")';
        bgImage.style.opacity = 1;
      }, 500); // Change opacity after 500ms transition
    }

    setInterval(changeBackgroundImage, 5000); // Change every 5 seconds


    window.addEventListener("scroll", function () {
      const parallax = document.querySelector(".parallax");
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });

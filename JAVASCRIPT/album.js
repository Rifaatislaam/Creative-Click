
// GALLERY SECTION 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      599: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1023: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      
    }
  });


// VIDEO SECTION

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});






// SEARCH SECTION

const button = document.querySelector(".button");
      button.addEventListener("mousedown", () => button.classList.add("clicked"));
      button.addEventListener("mouseup", () => button.classList.remove("clicked"));
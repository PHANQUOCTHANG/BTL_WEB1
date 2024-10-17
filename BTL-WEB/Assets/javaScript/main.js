//ẩn phần thời tiết khi mở ô tìm kiếm

var search = document.getElementById("toggleSearch");

search.addEventListener("change", function () {
  var weather = document.querySelector(".weather-now");
  if (this.checked) {
    weather.classList.add("hidden");
  } else {
    setTimeout(() => {
      weather.classList.remove("hidden");
    }, 100);
  }
});

//Xử lý khi thanh điều hướng qua top

var navBar = document.getElementById("main_nav");
var homeIcon = document.getElementById("home-ic");
var E_letter = document.getElementById("alter-icon");
var newLest = document.querySelector(".newlest");
var tamSu = document.querySelector(".tamsu");

var navBarPotision = navBar.offsetTop;
window.onscroll = function () {
  stickyNavBar();
};
function stickyNavBar() {
  if (window.pageYOffset >= navBarPotision) {
    navBar.classList.add("sticky-nav");
    E_letter.classList.remove("hidden");
    homeIcon.classList.add("hidden");
    newLest.classList.remove("hidden");
    tamSu.classList.add("hidden");
  } else {
    navBar.classList.remove("sticky-nav");
    E_letter.classList.add("hidden");
    homeIcon.classList.remove("hidden");
    newLest.classList.add("hidden");
    tamSu.classList.remove("hidden");
  }
  console.log("chiều cao ban đầu:" + navBarPotision);
  console.log("chiều cao hiện tại:" + window.pageYOffset);
}

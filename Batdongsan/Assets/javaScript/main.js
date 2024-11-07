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

function sticky_bannerAd() {
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

// Xử lí phần hiện nội dung ở tư vấn trong bất động sản .

function getInformation (icon)  {
  var content = icon.nextElementSibling;
  var rotate = icon ;
  rotate.classList.toggle('rotated') ;
  if (content.style.display === 'none' || content.style.display === "") {
    content.style.display = 'block' ;
  }
  else {
    content.style.display = 'none' ;
  }
}

function TabPage (page) {
  const TPage = page ;
  const pages = document.querySelectorAll('.item-page') ;
  pages.forEach(item => {
    if (!item.classList.contains("turn-off")) item.classList.add('turn-off') ;
    if (item.classList.contains("turn-on")) item.classList.remove('turn-on') ;
  }) ;
  if (!TPage.classList.contains("turn-on")) TPage.classList.add('turn-on') ;
  // TPage.innerHTML = Number(TPage.innerHTML) + 1;
}

function ClickPage() {
  const page = document.querySelector('.click-page') ;
  const pages = document.querySelectorAll('.item-page') ;
  pages.forEach(item => {
    if (!isNaN(item.innerHTML)) {
      const value = Number(item.innerHTML) + 1 ;
      if (value % 20 == 0) item.innerHTML = '20' ;
      else item.innerHTML = value % 20 ;
    }
  }) ;
}

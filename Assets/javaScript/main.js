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

// mở all menu
var allMenu = document.getElementById("all-menu");
var allMenuTop = document.getElementById("all-menu-top");
var allMenuIcon = document.getElementById("allMenuIcon");
var showAllMenu = document.querySelector(".wrap-all-menu");
var navItems = document.querySelectorAll(".parent li a");
var navBarPotision = navBar.offsetTop;
var exit_icon = document.getElementById("exit_icon");
var allMenuIcon = document.getElementById("allMenuIcon");
var check = 1;
window.onscroll = function () {
  stickyNavBar();
};
function stickyNavBar() {
  if (window.pageYOffset >= navBarPotision) {
    if (showAllMenu.classList.contains("show-all-menu") && check == 1) {
      document.body.classList.add("no-scroll");
    }
    navBar.classList.add("sticky-nav");
    setTimeout(() => {
      E_letter.classList.remove("hidden");
      homeIcon.classList.add("hidden");
      newLest.classList.remove("hidden");
      document.querySelector(".tamsu").classList.add("hidden");
      document.querySelector(".ykien").classList.add("hidden");
      document.querySelector(".xe").classList.add("hidden");
    }, 100);
  } else {
    navBar.classList.remove("sticky-nav");
    setTimeout(() => {
      E_letter.classList.add("hidden");
      homeIcon.classList.remove("hidden");
      newLest.classList.add("hidden");
      document.querySelector(".tamsu").classList.remove("hidden");
      document.querySelector(".ykien").classList.remove("hidden");
      document.querySelector(".xe").classList.remove("hidden");
    }, 100);
  }
}

allMenu.addEventListener("click", function () {
  event.preventDefault();
  if (showAllMenu.classList.contains("show-all-menu")) {
    showAllMenu.classList.remove("show-all-menu");
    navItems.forEach(function (nav) {
      nav.classList.remove("change_color"); // Áp dụng lớp cho từng <li>
    });
    allMenuIcon.classList.remove("change_color_2");
    document.body.classList.remove("no-scroll");
  } else {
    allMenuIcon.classList.add("change_color_2");
    showAllMenu.classList.add("show-all-menu");
    navItems.forEach(function (nav) {
      nav.classList.add("change_color_1"); // Xóa lớp khỏi từng <li>
    });
  }
});
allMenuTop.addEventListener("click", function () {
  event.preventDefault();
  if (showAllMenu.classList.contains("show-all-menu")) {
    showAllMenu.classList.remove("show-all-menu");
    document.body.classList.remove("no-scroll");
    check = 1;
    exit_icon.classList.add("hidden");
    allMenuIcon.classList.remove("hidden");
  } else {
    check = 0;
    showAllMenu.classList.add("show-all-menu");
    exit_icon.classList.remove("hidden");
    allMenuIcon.classList.add("hidden");
  }
});

var close_btn = document.getElementById("close-btn");

close_btn.addEventListener("click", function () {
  event.preventDefault();
  if (showAllMenu.classList.contains("show-all-menu")) {
    allMenuIcon.classList.remove("change_color_2");
    showAllMenu.classList.remove("show-all-menu");
    navItems.forEach(function (nav) {
      nav.classList.remove("change_color_1"); // Áp dụng lớp cho từng <li>
    });
    document.body.classList.remove("no-scroll");
    exit_icon.classList.add("hidden");
    allMenuIcon.classList.remove("hidden");
  } else {
    showAllMenu.classList.add("show-all-menu");
    navItems.forEach(function (nav) {
      nav.classList.add("change_color"); // Xóa lớp khỏi từng <li>
    });
  }
});
document.querySelectorAll(".btn-view-cate").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Find the parent <ul> of the clicked button
    const ul = button.closest("ul");

    // Select all hidden <li> elements within this specific <ul>
    ul.querySelectorAll(".hidden").forEach((item) => {
      item.classList.remove("hidden"); // Reveal hidden items
    });

    // Optionally hide the "Xem thêm" button after expanding
    button.style.display = "none";
  });
});

// Hàm lấy ngày/tháng/năm
function displayDate() {
  const today = new Date();
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  const dayName = days[today.getDay()];
  const day = today.getDate();
  const month = today.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  const year = today.getFullYear();

  const dateString = `${dayName}, Ngày ${day}/${month}/${year}`;
  document.querySelector(".time-now").innerText = dateString;
}

// Gọi hàm khi trang tải
displayDate();

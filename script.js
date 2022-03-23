// var bar = document.getElementById("bar");
// var nav = document.getElementById("navbar");

// if (bar) {
//   bar.addEventListener("click", () => {
//     nav.classList.add("active");
//   });
// }
// ---------------------------nav-bar----------------------------
var bar = $("#bar");
var nav = $("#navbar");
var close = $("#close");

if (bar) {
  bar.click(() => {
    $("#navbar").addClass("active");
  });
}

if (close) {
  close.click(() => {
    $("#navbar").removeClass("active");
  });
}

// ------------------------single-product------------------------

var mainImg = document.querySelector("#mainimg");
var smallImg = document.querySelectorAll(".small-img");

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};

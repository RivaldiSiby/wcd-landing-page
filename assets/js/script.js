$(document).ready(() => {
  // slide value
  let slideValue = $(".box-value-list");
  let btnValueLeft = $("#btn-left-value");
  let btnValueRight = $("#btn-right-value");

  btnValueLeft.on("click", () => {
    console.log("Left");
    slideValue.css("margin-left", "0%");
    btnValueRight.removeClass("btn-active-value");
    btnValueLeft.addClass("btn-active-value");
  });
  btnValueRight.on("click", () => {
    console.log("Right");
    slideValue.css("margin-left", "-90%");
    btnValueLeft.removeClass("btn-active-value");
    btnValueRight.addClass("btn-active-value");
  });
  // fixed menubar
  let menubarfix = $("#menu-bar-fix");
  let navBtn = $(".hamburger-btn-nav");
  let closeBtn = $("#close-menu");

  navBtn.on("click", () => {
    menubarfix.removeClass("d-none");
  });
  closeBtn.on("click", () => {
    menubarfix.addClass("d-none");
  });
});

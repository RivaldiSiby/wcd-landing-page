$(document).ready(() => {
  // scrool
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();
    if (scroll > 500) {
      $("#arrow-up").removeClass("d-none");
      $("#arrow-up").removeClass("d-none");
    } else {
      $("#arrow-up").addClass("d-none");
    }
  });
  // milestone
  for (let i = 1; i <= 5; i++) {
    $(`#main-text${i}`).toggleClass("d-none");
    $(`#icon-milestone${i}`).on("click", () => {
      $(`#box-milestone${i}`).toggleClass("wrap-box-active");
      $(`#icon-milestone${i}`).toggleClass("fa-plus");
      $(`#icon-milestone${i}`).toggleClass("fa-minus");
      $(`#main-text${i}`).toggleClass("d-none");
    });
  }
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

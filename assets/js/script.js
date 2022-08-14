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
  let btnBox = $("#btn-box-value");

  // web slide value
  if (screen.width > 990) {
    for (let i = 1; i <= 2; i++) {
      if (i === 1) {
        btnBox.append(
          `<button id="btn-value${i}" class="btn-value btn-active-value"></button>`
        );
      } else {
        btnBox.append(`<button id="btn-value${i}" class="btn-value"></button>`);
      }
      $(`#btn-value${i}`).on("click", () => {
        console.log("Left");
        if (i === 1) {
          slideValue.css("margin-left", "0%");
        } else {
          slideValue.css("margin-left", "-90%");
        }
        for (let x = 1; x <= 2; x++) {
          if (i === x) {
            $(`#btn-value${x}`).addClass("btn-active-value");
          } else {
            $(`#btn-value${x}`).removeClass("btn-active-value");
          }
        }
      });
    }
  } else if (screen.width < 990 && screen.width > 600) {
    let valueMargin = 0;
    for (let i = 1; i <= 3; i++) {
      if (i === 1) {
        btnBox.append(
          `<button id="btn-value${i}" class="btn-value btn-active-value"></button>`
        );
      } else {
        btnBox.append(`<button id="btn-value${i}" class="btn-value"></button>`);
      }
      $(`#btn-value${i}`).on("click", () => {
        valueMargin = i === 2 && i !== 1 ? 90 : 200;
        if (i === 1) {
          slideValue.css("margin-left", "0%");
        } else {
          slideValue.css("margin-left", `-${valueMargin}%`);
        }
        for (let x = 1; x <= 3; x++) {
          if (i === x) {
            $(`#btn-value${x}`).addClass("btn-active-value");
          } else {
            $(`#btn-value${x}`).removeClass("btn-active-value");
          }
        }
      });
    }
  } else {
    let valueMargin = 0;
    for (let i = 1; i <= 6; i++) {
      if (i === 1) {
        btnBox.append(
          `<button id="btn-value${i}" class="btn-value btn-active-value"></button>`
        );
      } else {
        btnBox.append(`<button id="btn-value${i}" class="btn-value"></button>`);
      }
      $(`#btn-value${i}`).on("click", () => {
        valueMargin =
          i === 2 && i !== 1
            ? 70
            : i === 3
            ? 140
            : i === 4
            ? 220
            : i === 5
            ? 300
            : 370;
        if (i === 1) {
          slideValue.css("margin-left", "0%");
        } else {
          slideValue.css("margin-left", `-${valueMargin}%`);
        }
        for (let x = 1; x <= 6; x++) {
          if (i === x) {
            $(`#btn-value${x}`).addClass("btn-active-value");
          } else {
            $(`#btn-value${x}`).removeClass("btn-active-value");
          }
        }
      });
    }
  }

  // btnValueLeft.on("click", () => {
  //   console.log("Left");
  //   slideValue.css("margin-left", "0%");
  //   btnValueRight.removeClass("btn-active-value");
  //   btnValueLeft.addClass("btn-active-value");
  // });
  // btnValueRight.on("click", () => {
  //   console.log("Right");
  //   slideValue.css("margin-left", "-90%");
  //   btnValueLeft.removeClass("btn-active-value");
  //   btnValueRight.addClass("btn-active-value");
  // });
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

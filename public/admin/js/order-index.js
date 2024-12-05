const divs = document.querySelectorAll(".nav-item .nav-link");

const url = new URL(window.location.href);
const result = url.searchParams.get("result");

switch (result) {
  case "printing":
    for (let div of divs) {
      if (div.classList.contains("active")) {
        div.classList.remove("active");
        break;
      }
    }
    divs[1].classList.add("active");
    break;
  case "printed":
    for (let div of divs) {
      if (div.classList.contains("active")) {
        div.classList.remove("active");
        break;
      }
    }
    divs[2].classList.add("active");
    break;
  case "failed":
    for (let div of divs) {
      if (div.classList.contains("active")) {
        div.classList.remove("active");
        break;
      }
    }
    divs[3].classList.add("active");
    break;

  default:
    for (let div of divs) {
      if (div.classList.contains("active")) {
        div.classList.remove("active");
        break;
      }
    }
    divs[0].classList.add("active");
    break;
}

// const printerIdLis = document.querySelectorAll(
//   ".printer-id-dropdown-menu .dropdown-item"
// );

// // const url = new URL(window.location.href);

// printerIdLis[0].addEventListener("click", () => {
//   url.searchParams.delete("status");
//   url.searchParams.set("page", "1");
//   window.location.href = url.href;
// });

// printerIdLis[1].addEventListener("click", () => {
//   url.searchParams.set("status", "using");
//   url.searchParams.set("page", "1");
//   window.location.href = url.href;
// });

// printerIdLis[2].addEventListener("click", () => {
//   url.searchParams.set("status", "standby");
//   url.searchParams.set("page", "1");
//   window.location.href = url.href;
// });

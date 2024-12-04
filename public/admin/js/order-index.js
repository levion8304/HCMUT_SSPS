const divs = document.querySelectorAll(".nav-item .nav-link" );

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

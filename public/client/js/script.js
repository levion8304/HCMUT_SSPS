// Show Alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const time = showAlert.getAttribute("data-time");
  const closeAlert = showAlert.querySelector("[close-alert]");

  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, parseInt(time));

  closeAlert.addEventListener("click", () => {
    showAlert.classList.add("alert-hidden");
  });
}
// End Show Alert

// Upload Image
const uploadImage = document.querySelector("[upload-image]");
if (uploadImage) {
  const uploadImageInput = uploadImage.querySelector("[upload-image-input]");
  const uploadImagePreview = document.querySelector("[upload-image-preview]");
  uploadImageInput.addEventListener("change", () => {
    const [file] = uploadImageInput.files;
    if (file) {
      uploadImagePreview.src = URL.createObjectURL(file);
    }
  });
}
// End Upload Image

window.addEventListener("load", () => {
  setTimeout(() => {
    const loading = document.querySelector(".loading");
    loading.style.display = "none";
  }, 500);
});

const headerMenuItems = document.querySelectorAll(".header-menu > li");
const url = new URL(window.location.href);
switch (url.pathname) {
  case "/home":
    headerMenuItems[0].classList.add("active");
    break;
  case "/about":
    headerMenuItems[1].classList.add("active");
    break;
  case "/print/buy-paper":
    headerMenuItems[2].classList.add("active");
    break;
  case "/print":
    headerMenuItems[3].classList.add("active");
    break;
  case "/user/my-account":
    headerMenuItems[4].classList.add("active");
    break;
  case "/user/log-order":
    headerMenuItems[4].classList.add("active");
    break;

  default:
    break;
}

const siderMenuItems = document.querySelectorAll(".sider-menu > li");
console.log(siderMenuItems);
switch (url.pathname) {
  case "/user/my-account":
    siderMenuItems[0].classList.add("sider-menu-active");
    break;
  case "/user/log-order":
    siderMenuItems[1].classList.add("sider-menu-active");
    break;

  default:
    break;
}

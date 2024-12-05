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
  }, 1000);
});

// Pagination
const pageItems = document.querySelectorAll(".pagination .page-item");

if (pageItems) {
  const page = parseInt(new URL(window.location.href).searchParams.get("page"));
  pageItems[page].classList.add("active");

  const pageLinks = document.querySelectorAll(
    ".pagination .page-item .page-link"
  );
  const url = new URL(window.location.href);

  for (let i = 1; i < pageLinks.length - 1; i++) {
    pageLinks[i].addEventListener("click", () => {
      url.searchParams.set("page", i);
      window.location.href = url.href;
    });
  }

  pageLinks[0].addEventListener("click", () => {
    url.searchParams.set("page", page > 1 ? page - 1 : 1);
    window.location.href = url.href;
  });

  pageLinks[pageLinks.length - 1].addEventListener("click", () => {
    url.searchParams.set("page", page < totalPages ? page + 1 : page);
    window.location.href = url.href;
  });
}

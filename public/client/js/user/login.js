const usernameInput = document.querySelector("input#username");
const password = document.querySelector("input#password");

const formLogin = document.querySelector("form");
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
})
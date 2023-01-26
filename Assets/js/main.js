const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.email.value;

  if (!/^[\w\d]+@[\w]+\.[\w]+$/i.test(email)) {
    this.classList.add("error");
    return;
  } else {
    this.classList.remove("error");
  }
});

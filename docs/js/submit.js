const scriptURL =
  "https://script.google.com/macros/s/AKfycbyNWN9bwKI2NtOM4g1goKl1e6Kt3-rHnx1N2PYXY-eWmh7RmeBgQsuwsZGrK8aJdMVbhg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector("#msg");
const subBtn = document.querySelector(".sub-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      msg.innerHTML = "Message sent successfully!";
      msg.style.backgroundColor = "var(--color-secondary)";
      msg.style.borderRadius = ".8rem";
      msg.style.padding = ".8rem 1.5rem";
      setTimeout(function () {
        msg.innerHTML = "";
        msg.removeAttribute("style");
      }, 3000);
      form.reset();
    })
    .catch((error) => alert.error("Message not sent!", error.message));
});

//Show alert message after submit
subBtn.addEventListener("click", () => {
  const inputName = document.getElementById("input-name");
  if (inputName.value !== "") {
    alert("Message sent successfully!");
  }
});

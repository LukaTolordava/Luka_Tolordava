// error message if Email and Password field will be empty
document.addEventListener("DOMContentLoaded", () => {
  const continueButton = document.querySelector(".continue-button");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const emailError = document.querySelector(".email-error");
  const passwordError = document.querySelector(".password-error");

  continueButton.addEventListener("click", (event) => {
    if (!emailInput.value) {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }

    if (!passwordInput.value) {
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }

    if (!emailInput.value || !passwordInput.value) {
      event.preventDefault();
    }
  });
});

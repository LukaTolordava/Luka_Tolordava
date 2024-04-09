// terms and condition text show
document.addEventListener("DOMContentLoaded", () => {
  const termsLink = document.getElementById("termsLink");
  const privacyLink = document.getElementById("privacyLink");
  const termsAndPrivacyContent = document.getElementById("termsAndPrivacyContent");
  const overlay = document.getElementById("overlay");

  termsLink.addEventListener("click", (event) => {
      event.preventDefault();
      termsAndPrivacyContent.style.display = "block";
      overlay.style.display = "block";
  });

  privacyLink.addEventListener("click", (event) => {
      event.preventDefault();
      termsAndPrivacyContent.style.display = "block";
      overlay.style.display = "block";
  });

  const iAgreeButton = document.querySelector(".i-agree-button");
  if (iAgreeButton) {
      iAgreeButton.addEventListener("click", (event) => {
          event.preventDefault();
          termsAndPrivacyContent.style.display = "none";
          overlay.style.display = "none";
      });
  }
});
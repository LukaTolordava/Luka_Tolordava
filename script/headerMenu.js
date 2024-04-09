// sign in/sign up/sign out menu 
document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.querySelector(".user-icon");
  const userMenu = document.getElementById("userMenu");

  userIcon.addEventListener("click", (event) => {
    event.preventDefault();
    userMenu.style.display = (userMenu.style.display === "block") ? "none" : "block";
  });
});
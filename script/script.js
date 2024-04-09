// Change header background color, logo icon, user logo icon and text color on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const logoIcon = document.querySelector('.logo-icon');
  const navLinks = document.querySelectorAll('.navbar a');
  const userIcon = document.querySelector('.user-icon img');
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.style.backgroundColor = '#EAE9E9'; // Change to grey color when scrolled
    logoIcon.src = 'icons/ExploreEra(black).png'; // Change to the black logo image path
    userIcon.src = 'icons/user-icon-black.png'; // Change to the black user icon logo image path

    // Change text color of navigation links to grey
    navLinks.forEach((link) => {
      link.style.color = '#424244';
    });
  } else {
    header.style.backgroundColor = 'transparent'; // Change back to transparent when at the top
    logoIcon.src = 'icons/ExploreEra.png'; // Change back to the original logo image
    userIcon.src = 'icons/user-icon.png'; // Changes back to the original user icon logo

    // Change text color of navigation links back to white
    navLinks.forEach((link) => {
      link.style.color = '#fff';
    });
  }
});

// carusel
const carusel = document.querySelector(".carusel");
const firstCard = carusel.querySelector(".card");
const arrowIcons = document.querySelectorAll(".wrapper span");

const firstCardWidth = firstCard.clientWidth + 20;

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce width value from the carusel scroll left else add to it
    if(icon.id == "left") {
      carusel.scrollLeft -= firstCardWidth;
    } else {
      carusel.scrollLeft += firstCardWidth;
    }
  });
});


// book-a-trip-section
document.querySelectorAll('.select-box').forEach((selectBox) => {
  const selectOption = selectBox.querySelector('.select-option');
  const soValue = selectBox.querySelector('.soValue');
  const optionsList = selectBox.querySelector('.options');
  const optionsListItems = optionsList.querySelectorAll('li');

  selectOption.addEventListener('click', (event) => {
    selectBox.classList.toggle('active');
    const icon = selectOption.querySelector('.material-symbols-outlined');
    icon.textContent = icon.textContent === 'expand_more' ? 'expand_less' : 'expand_more';
  });

  optionsListItems.forEach((option) => {
    option.addEventListener('click', (event) => {
      const text = event.target.textContent;
      soValue.value = text;
      selectBox.classList.remove('active');
    });
  });
});


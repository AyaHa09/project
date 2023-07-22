let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let isDropdownVisible = false;

function showDropdown() {
  isDropdownVisible = true;
  const dropdownContent = document.querySelector('.dropdown-content');
  if (dropdownContent) {
    dropdownContent.style.display = 'block';
  }
}

function hideDropdown() {
  isDropdownVisible = false;
  setTimeout(() => {
    if (!isDropdownVisible) {
      const dropdownContent = document.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = 'none';
      }
    }
  }, 200);
}




// console.log("test")

let hamburgerIsOpen = false;

function openHamburger() {
  let hamburgerHeaderContainer = document.getElementById(
    "hamburger-header-container"
  );

  // !hamburgerIsOpen > hamburgerIsOpen == false
  // hamburgerIsOpen > hamburgerIsOpen == true
  if (!hamburgerIsOpen) {
    console.log(hamburgerIsOpen);
    hamburgerHeaderContainer.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    console.log(hamburgerIsOpen);
    hamburgerHeaderContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
}

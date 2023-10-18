const openModal = document.querySelector(".btn--about");
const closeModalBtn = document.querySelector(".closeModal");
const modal = document.querySelector("#modal");
function modalAbout() {
  modal.showModal();
}

function closeModal() {
  modal.close();
}

openModal.addEventListener("click", modalAbout);
closeModalBtn.addEventListener("click", closeModal);

// Email.send({
// Host : "smtp.elasticemail.com",
// Username : "jmomo581@gmail.com",
// Password : "F0F4E62FF63C1A6E13241FFFB0582C99403A",
// To : 'jmomo581@gmail.com',
// From : "jmomo581@gmail.com",
// Subject : "Hello desde portfolio",
// Body : "¡Lo logramos!"
// }).then(
// message => alert(message)
// );

const openMenu = document.querySelector(".btn--menu");
const closeMenu = document.querySelector(".btn--close");
const containerMenu = document.querySelector(".menu--container");
const menuItems = document.querySelectorAll(".menu-item");

function openMenuMobile() {
  containerMenu.classList.toggle("active");
}

function closeMenuMobile() {
  containerMenu.classList.toggle("active");
}

openMenu.addEventListener("click", openMenuMobile);
closeMenu.addEventListener("click", closeMenuMobile);

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    containerMenu.classList.toggle("active");
  });
});

const logoImg = document.querySelector(".img--logo");
const href = document.querySelector("#href");

logoImg.addEventListener("click", () => {
  if (href.value === "./styles/style.css") {
    href.value = "./styles/stylesChange.css";
  } else {
    href.value = "./styles/style.css";
  }
});

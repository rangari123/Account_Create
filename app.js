const array = ["a", "b", "c", "d", "@", 1, 0, 2, 3, 4, 5, "A", "B", "C", "D"];
const password = document.querySelector(".password-text");
let text = document.querySelector(".pass");

password.addEventListener("click", function () {
  let store = "Your password is: ";
  for (let i = 0; i < 6; i++) {
    store += array[getRandomNumber()];
    console.log(store);
  }
  text.textContent = store;
});

function getRandomNumber() {
  return Math.floor(Math.random() * array.length);
}

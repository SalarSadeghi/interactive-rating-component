const btn = document.querySelector(".submit");
const questionCard = document.querySelector(".container");
const thankyouCard = document.querySelector(".containerThankyou");
const numbers = document.querySelectorAll(".numberContainer");
const alert = document.querySelector(".alertThankyou");

let selectedNumber
numbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    numbers.forEach((number) => {
      number.style.backgroundColor = "hsla(216, 12%, 54%, 0.122)";
    });
    number.style.backgroundColor = "hsl(25, 97%, 53%)";
    number.style.color = "white";
    selectedNumber = number.textContent
  });
  
});

btn.addEventListener("click", () => {
  questionCard.style.display = "none";
  thankyouCard.style.display = "flex";
  alert.textContent = `You selected ${selectedNumber} out of 5`
});

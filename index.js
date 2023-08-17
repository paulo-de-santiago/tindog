// @ts-nocheck
// Remember to import the data and Dog class!

import dogsData from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", function (element) {
  // @ts-ignore
  if (element.target.dataset.nope) {
    buttonOption(element.target.dataset.nope);
  }
  if (element.target.dataset.like) {
    buttonOption(element.target.dataset.like);
  }
});

let counting = 0;
let dog = new Dog(dogsData[counting]);

function buttonOption(option) {
  let btnImgNope = document.getElementById("badge-nope-img");

  let btnImgLike = document.getElementById("badge-like-img");

  let button = document.getElementsByClassName("button");
  if (option === "nope") {
    btnImgNope.style.display = "inline";
    button.disabled = true; // disable button
    setTimeout(getNewDog, 1500);
    dog.setStatus(false);
  } else if (option === "like") {
    btnImgLike.style.display = "inline";
    button.disabled = true;
    btnImgLike.disabled = true;
    setTimeout(getNewDog, 2000);
    dog.setStatus(true);
  }
}

function getNewDog() {
  if (counting >= 2) {
    counting = 0;
  } else {
    counting += 1;
  }
  dog = new Dog(dogsData[counting]);
  render();
  console.log(counting);
}

function render() {
  // @ts-ignore
  document.getElementById("outsider-div").innerHTML = dog.getNewDogHtml();
}

render();

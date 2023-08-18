// @ts-nocheck
// Remember to import the data and Dog class!

import dogsData from "./data.js";
import Dog from "./Dog.js";

let remove = document.addEventListener(
  "click",
  function (element) {
    // @ts-ignore
    if (element.target.dataset.nope) {
      buttonOption(element.target.dataset.nope);
    }
    if (element.target.dataset.like) {
      buttonOption(element.target.dataset.like);
    }
  },
  false
);

let counting = 0;
let dog = new Dog(dogsData[counting]);
let isWaiting = false;

function buttonOption(option) {
  let btnImgNope = document.getElementById("badge-nope-img");

  let btnImgLike = document.getElementById("badge-like-img");

  /* To Do */
  let button = document.getElementsByClassName("button");

  if (option === "nope") {
    btnImgNope.style.display = "inline";
    dog.setStatus(false);
    /* To Do */
    /* button.type.button = "disabled"; */
    setTimeout(getNewDog, 2000);
  } else if (option === "like") {
    btnImgLike.style.display = "inline";
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

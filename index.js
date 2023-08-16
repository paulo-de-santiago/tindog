// @ts-nocheck
// Remember to import the data and Dog class!

import dogsData from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", function (element) {
  // @ts-ignore
  if (element.target.dataset.no) {
    buttonOption(element.target.dataset.no);

    console.log(element.target.dataset.no);
  }
  if (element.target.dataset.like) {
    getNewDog();
    buttonOption(element.target.dataset.like);
    console.log(element.target.dataset.like);
  }
});

let counting = 0;
let dog = new Dog(dogsData[counting]);

function buttonOption(option) {
  if (option === "no") {
    dog.setStatus(false);

    console.log("no");
  } else if (option === "like") {
    dog.setStatus(true);
    console.log("like");
  }
}
function getNewDog() {
  if (counting >= 2) {
    counting = 0;
    dog = new Dog(dogsData[counting]);
  } else {
    counting += 1;
    dog = new Dog(dogsData[counting]);
  }
  render();
  console.log(counting);
}

function render() {
  // @ts-ignore
  document.getElementById("outsider-div").innerHTML = dog.getNewDogHtml();
}

render();

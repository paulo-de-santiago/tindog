// @ts-nocheck
// Remember to import the data and Dog class!

import dogsData from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", function (element) {
  // @ts-ignore
  if (element.target.dataset.no) {
    getNEwDog();

    console.log(element.target.dataset.no);
    console.log("No");
  }
  if (element.target.dataset.like) {
    console.log(element.target.dataset.like);
    console.log("yes");
  }
});

let counting = 0;

let dog = new Dog(dogsData[counting]);

function getNEwDog() {
  if (counting >= 2) {
    counting = 0;
    dog = Dog(dogsData[counting]);
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

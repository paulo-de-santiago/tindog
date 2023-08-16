// @ts-nocheck
// Remember to import the data and Dog class!

import dogsData from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", function (element) {
  // @ts-ignore
  if (element.target.dataset.no) {
    /* getNEwDog(element.target.dataset.no); */
    console.log(element.target.dataset.no);
    console.log("No");
  }
  if (element.target.dataset.like) {
    console.log(element.target.dataset.like);
    console.log("yes");
  }
});

let arrayNames = ["Rex", "Bella", "Teddy"];

function getNEwDog() {
  if (dogsData.length > 0) {
    return new Dog(dogsData[0]);
  }
}

/* function buttonNo(data) {
  document.getElementById("no");
  console.log(data);
}
 */
function render() {
  // @ts-ignore
  document.getElementById("outsider-div").innerHTML = dog.getNewDogHtml();
}

let dog = getNEwDog(); /* getNEwDog(); */
/* console.log(dog); */
render();

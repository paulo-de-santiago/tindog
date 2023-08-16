// @ts-nocheck
// Remember to import the data and Dog class!

import dogsData from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", function (element) {
  // @ts-ignore
  if (element.target.dataset.no) {
    getNEwDog();
    /* getNEwDog(element.target.dataset.no); */
    console.log(element.target.dataset.no);
    console.log("No");
  }
  if (element.target.dataset.like) {
    console.log(element.target.dataset.like);
    console.log("yes");
  }
});

let arrayIndex = ["0", "1", "2"];

function getNEwDog() {
  let nextDog = arrayIndex.shift();
  console.log(typeof nextDog);
  return arrayIndex.length > 0 ? new Dog(dogsData[nextDog]) : {};
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

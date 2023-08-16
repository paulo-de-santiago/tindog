// @ts-nocheck
// Remember to import the data and Dog class!

import data from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", function (element) {
  // @ts-ignore
  if (element.target.dataset.no) {
    render();
  } else if (element.target.dataset.like) {
    render();
  }
});

/* function buttonNo(data) {
  document.getElementById("no");
  console.log(data);
}
 */
function render() {
  // @ts-ignore
  document.getElementById("outsider-div").innerHTML = dog.getNewDogHtml();
}

let dog = new Dog(data[0]);
render();

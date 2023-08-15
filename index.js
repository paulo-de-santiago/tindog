// Remember to import the data and Dog class!

import data from "./data.js";
import Dog from "./Dog.js";

function render() {
  // @ts-ignore
  document.getElementById("outsider-div").innerHTML = dog.getNewDogHtml();
}

let dog = new Dog(data[0]);
render();

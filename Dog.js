// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setStatus(option) {
    this.hasBeenSwiped = true;
    this.hasBeenLiked = option;
  }

  /* var image = document.getElementsByClassName("image2");
image.src = "image1.jpg" */

  getNewDogHtml() {
    // @ts-ignore
    const { name, avatar, age, bio } = this;

    return `<div class="outsider-div" id="outsider-div">
              <img src="${avatar}" alt="" />

                <div class="dog-info-general">
                    <div class="badge" id="badge">
                      <img src="./images/badge-nope.png" alt="" class="badge-nope-img" id="badge-nope-img"/> 
                      <img src="./images/badge-like.png" alt="" class="badge-like-img" id="badge-like-img"/> 
                    </div>
                    <div class="dog-info" id="dog-info">
                      <h3>${name}, ${age}</h3>
                      <p>${bio}</p>
                    </div>
                </div>
            </div>

        
            `;
  }
}

export default Dog;

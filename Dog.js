// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getNewDogHtml() {
    // @ts-ignore
    const { name, avatar, age, bio } = this;

    return `<div class="outsider-div" id="outsider-div">
              <img src="${avatar}" alt="" />

                <div class="dog-info-general">
                    <div class="badge-like" id="badge-like">
                      <img src="./images/badge-like.png" alt="<!--  -->" class="badge-like-img" id="badge-like-img"/>
                    </div>
                    <div class="dog-info" id="dog-info">
                      <h3>${name}, ${age}</h3>
                      <p>${bio}</p>
                    </div>
                </div>
            </div>

            <footer class="footer-icons" id="footer-icons">
              <div class=div-footer-icons id="div-footer-icons">

                  <button class="no" id="no" >
                    <img src="./images/icon-cross.png" alt="No" class="no-size" id="no-size" data-no="${name}"/>
                  </button>

                  <button class="like" id="like">
                    <img src="./images/icon-heart.png" alt="Like" class="like-size" id="like-size" data-like="${name}"/>
                  </button>  

              </div>
            </footer>    
            `;
  }
}

export default Dog;

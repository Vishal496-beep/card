let form = document.querySelector("form")
let username = document.querySelector("#name")
let role = document.querySelector("#role")
let bio = document.querySelector("#bio")
let photo = document.querySelector("#photo")


const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this))
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser()
    },
    addUser: function () {
        this.users.push({
          username: username.value,
          role: role.value,
          bio: bio.value,
         photo: photo.value
        })
        form.reset();
        this.renderUI()
    },
    renderUI: function () {
        this.users.forEach(function (user){
            document.querySelector(".cards").innerHTML = ""
            //creating card container
    let cardContain = document.createElement("div");
       cardContain.className = "cards";

       //creating card 
       let card = document.createElement("div")
           card.className = "card";

           //image container 

        let img = document.createElement("img")
          img.src = user.photo;
          img.alt = "user photo"

          //name heading

          let name = document.createElement("h3")
          name.textContent = user.username
         // role heading

         let role = document.createElement("p")
         role.textContent = user.role
         //bio context

         let bio = document.createElement("p")
         bio.textContent = user.bio

         //Appendchil card
         card.append(img,name, role, bio)

         cardContain.appendChild(card)
//full ui submition
         document.querySelector(".cards").appendChild(cardContain)
        })
    },
    removeUser : function () {}
}

userManager.init()
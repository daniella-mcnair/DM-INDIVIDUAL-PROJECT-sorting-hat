
const sortShowCards = document.getElementById("#sortBtn";)
const card = document.getElementById("#card");
const removeEnterButton = document.getElementById("removeEnterButton");
const card = document.getElementById("card")

sortShowCards.addEventListener("click", function()) {
  if (card.style.display === "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";


let domString = ""
// Loop over the array and create our pie cards
for(pet of pets){
    domString += `

    <div class="card" style="max-width: 18rem;">
    <div class="card-header">${pet.name}</div>
    <img src=${pet.imageUrl} class="img" alt=${pet.id}>
    <div class="card-body">
    
      <h5 class="card-title">${pet.color}</h5>
      <p class="card-text">${pet.specialSkill}</p>
    </div>
    <div class="card-footer">${pet.type}</div>
    <button type="button" id="delete--${pet.id}" class="btn btn-danger">Delete</button>
  </div>
  </div>`
}




//removeEnterButton.addEventListener("click", function () => {
  let removeEnter = document.getElementById("#removeEnterButton");

//or let removeHome = document.getElementById("class or id name")
//})

  }*/


document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.getElementById("form-container");
  const resultContainer = document.getElementById("result-container");
  const renderFormButton = document.getElementById("renderFormButton");

  // Define a function to render the form
  function renderForm() {
    const formHTML = `
      <h2>Enter Your Information</h2>
      <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <button type="submit">Submit</button>
      </form>
    `;

    formContainer.innerHTML = formHTML;

    const myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      resultContainer.innerHTML = `
        <h2>Form Input Values:</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
      `;
    });
  }

  // Listen for the button click to render the form
  renderFormButton.addEventListener("click", renderForm);
});






Regenerate



/*const studentNameForm = document.querySelector("#studentNameForm");
const studentCards = document.querySelector("#studentCards");

studentNameForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const inputStudentName = document.querySelector("#studentName");
  const studentName = inputStudentName.ariaValueMax;
});*/

/*const students = [
  {
    id: 1,
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
    name: "Allie",
    house: "Gryffindor",
  }, 
  {
    id: 2,
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
    name: "Jacob",
    house: "Slytherin",
  }
]

const renderToDom = (students) =>{

  let domString1 = ""

students.forEach((student) => {
    domString1 += 
    `<div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
    <img src=${students.imageUrl} class="img" alt=${students.id}>
      <h5 class="card-title">${students.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`
  });

  //const app = document.querySelector("#all");
  app.innerHTML = domstring1;

//Gryffindor Filter
const filter = () => {
  let Gryff = []
  students.forEach((student)) {
    if (student.house === "Gryffindor"){
      Gryff.push(student);
      console.log("i work")
    }
  
}

/*Button variables
const sortingButton = document.querySelector("#sortButton");

sortingButton.addEventListener("click", sortStudent);
//event functions//
function sortStudent (event) {
  console.log('do u work or nah?');
}/*

/*const sortShowCards = document.getElementById("#sortBtn";)
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

*/

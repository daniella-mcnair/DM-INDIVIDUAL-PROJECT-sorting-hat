const students = []

const myFirstCard = document.querySelector("#firstCard")

//This is the js variable to the html form
const renderForm = document.querySelector("#showForm")
//This is the js variable to the sort button on the html form


//This is the js variable to select the "Let's Go" button in html
const showCardJS = document.querySelector("#showCard")






showCardJS.addEventListener("click",renderForm2Dom)


function renderForm2Dom() {

  let domstring = "";
  domstring += `
  <div class="card" id = "HouseCard" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Enter First Year's Name:</h5>
    <h3>Student:</h3>

    <!--FORM-->

    <label for="inputStudentName" class="form-label"> </label>
    <input type="text" id="inputName" class="form-control" aria-describedby="passwordHelpBlock">
    <a href="#" class="btn btn-primary" id="sortStudentButton">Sort!</a>
  </div>
</div>

<div id = "filters">
<button type="button" id="catB" class="btn btn-primary">Gryffindor</button>
<button type="button" id="dog" class="btn btn-secondary">Slytherin</button>
<button type="button" id="dino" class="btn btn-success">Hufflepuff</button>
<button type="button" id="all" class="btn btn-danger">Ravenclaw</button></div>


  `
renderForm.innerHTML = domstring;

//The stuff below doesn't show on the dom until this function is rendered so it needs to be here or else it can't find the id because it's doesn't show yet)
const sortJsButton = document.querySelector ("#sortStudentButton")
sortJsButton.addEventListener("click",sortStudents) 

const inputName = document.querySelector ("#inputName")
//inputName.addEventListener("click",sortStudents)

sortJsButton.addEventListener("click", addNewStudent);



};



function sortStudents() {
  //this removes my let's go button
  showCardJS.innerHTML = ""

  //This renders to array to dom 
  let domString = ""
  students.forEach((student) => {
      domString += `
      <div class="card" id = "HouseCard" style="width: 18rem;">
      <div class="card-header">
      </div>
      <div class="card-body">
      <img src=${student.imageUrl} class="img" alt=${student.id}>
        <h5 id="studentName">${student.name}</h5>
        <p id="studentHouse">${student.house}</p>
        <a href="#" class="btn btn-primary expelButton" id="delete--${student.id}">Expel</a>
      </div>
    </div>
    
    `
  });

 app.innerHTML = domString;



const clearForm = document.querySelector ("#inputName")

const expelButtonJs = document.querySelector(".expelButton")
expelButtonJs.addEventListener("click", expelStudent)
}

function addNewStudent() {
  const randomHouse = [
    "Gryffindor", "Slytherin","Ravenclaw","Huffinpuff" 
  ];
  
  const RandomizeHouses = Math.floor(Math.random() * randomHouse.length);
  
  const house = randomHouse[RandomizeHouses]
  //this is like randomHouse[1] but RandomizeHouses creates a random set of index [1] in the previous ex is an index

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#inputName").value,
    //imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    house: house,
  };

  students.unshift(newStudentObj)
  sortStudents(students)
  clearForm.reset
 
//The stuff below doesn't show on the dom until this function is rendered so it needs to be here or else it can't find the id because it's doesn't show yet)

};



const expelStudent = (event) => {
  if(event.target.id.includes("delete")){
    const[, id] = event.target.id.split("--")
    const index = students.findIndex(obj => obj.id === id);
    students.splice(index,1)
    sortStudents(students);
  }


}

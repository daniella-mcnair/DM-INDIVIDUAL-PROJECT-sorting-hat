const students = [
  {
    id: 1,
    imageUrl: "",
    name: "Allie",
    house: "",
  }, 
  {
    id: 2,
    imageUrl: "",
    name: "Jacob",
    house: "",
  }
]

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

    <label for="inputPassword5" class="form-label"> </label>
    <input type="text" id="inputName" class="form-control" aria-describedby="passwordHelpBlock">
    <a href="#" class="btn btn-primary" id="sortStudentButton">Sort!</a>
  </div>
</div>
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

  //This renders to array to dom 
  let domString = ""
  students.forEach((student) => {
      domString += `<div class="card" id = "HouseCard" style="width: 18rem;">
      <div class="card-header">
      </div>
      <div class="card-body">
      <img src=${student.imageUrl} class="img" alt=${student.id}>
        <h5 id="studentName">${student.name}</h5>
        <p id="studentHouse">${student.house}</p>
        <a href="#" class="btn btn-primary" id="expelButton">Expel</a>
      </div>
    </div>`
  });

 app.innerHTML = domString;
}

function addNewStudent() {
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#inputName").value,

  };

  students.unshift(newStudentObj)
  sortStudents(students)
  form.reset
 


};

/*
//WORKING ON THIS ONE
//function addStudent () {
const nameInput = document.getElementById("inputName");
//const houseInput = document.getElementById("studentHouse");

const newName = nameInput.value;
//const newHouse = houseInput.value;

const newStudent ={
  id: students.length + 1,
  imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  name: newName,
  //house: newHouse,
};
students.push(newStudent);
renderToDom();
nameInput.value = "";
//houseInput.value = "";/*

  
};/*

/*
 PREVIOUS CODE ////
const students = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1589859762194-eaae75c61f64?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbGlkJTIwY29sb3J8ZW58MHx8MHx8fDA%3D",
    name: "Allie",
    house: "",
  }, 
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1505151771131-4fe946e1cf40?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxzb2xpZCUyMGNvbG9yfGVufDB8fDB8fHww",
    name: "Jacob",
    house: "",
  }
]

const exStudents = [];


const app = document.querySelector("#app")
const app2 = document.querySelector("#app2")
const expelledStudents = document.querySelector("#expelledStudents")




const sortButton = document.querySelector("#sortButton");
const expelButton = document.querySelector("#expelButton");



sortButton.addEventListener("click",renderToDom);
sortButton.addEventListener("click",addStudent);
expelButton.addEventListener("click", expelStudent);


function renderToDom () {
  const randomHouse = [
    "Gryffindor", "Slytherin","Ravenclaw","Huffinpuff" 
  ];
  
  const RandomizeHouses = Math.floor(Math.random() * randomHouse.length);
  
  const house = randomHouse[RandomizeHouses]
  console.log(house);
  

  let domString = ""
  // Loop over the array and create our pie cards
  students.forEach((student) => {
      domString += `<div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
      <img src=${student.imageUrl} class="img" alt=${student.id}>
        <h5 id="studentName">${student.name}</h5>
        <p id="studentHouse">${house}</p>
        <a href="#" class="btn btn-primary" id="expelButton">Expel</a>
      </div>
    </div>`
  });

app.innerHTML = domString;


};

function addStudent () {
const nameInput = document.getElementById("studentName");
const houseInput = document.getElementById("studentHouse");

const newName = nameInput.value;
const newHouse = houseInput.value;

const newStudent ={
  id: students.length + 1,
  imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  name: newName,
  house: newHouse,
};
students.push(newStudent);
renderToDom();
nameInput.value = "";
houseInput.value = "";

console.log(randomHouse);
console.log(RandomizeHouses);

}

//let moldVold = students.map(function(element)){
  //return element.splice,
//};

/*
const filter () => {
  let itsGryff = []
    for (student of students){
      student.house ==
    }
    
}*/
   
//Random House Code 



  /*students.forEach((student) => {
      domString += `<div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
      <img src=${student.imageUrl} class="img" alt=${student.id}>
        <h5 id="studentName">${student.name}</h5>
        <p id="studentHouse">${house}</p>
        <a href="#" class="btn btn-primary" id="expelButton-$(student.id}">Expel</a>
      </div>
    </div>`;
  });*/

  /*function expelStudent(student) {
    exStudents.push(student);
    const expelledStudent = document.querySelector("#expelledStudents");

    const expelledStudentCard =`
    <div class="card">
      <div class="card-header">
        Expelled Student
      </div>
      <div class="card-body">
        <img src=${student.imageUrl} class="img" alt=${student.id}>
        <h5 id="studentName">${student.name}</h5>
        <p id="studentHouse">${student.house}</p>
      </div>
    </div>`;

    expelledStudents.insertAdjacentHTML("beforeend"), expelledStudentt);
    students.splice(students.indexOf(student), 1);

    renderToDom();
  }*/

    
/*function expelStudent (event) 
  const studentId = event.target.getAttribute("student.id");

  const expelledStudentIndex = students.findIndex((student) => student.id === parseInt(studentId));

  if (expelledStudentIndex !== -1) {
 
    students.splice(expelledStudentIndex, 1);

    renderToDom();
    renderExpelledStudents();
    console.log(renderExpelledStudents)
  }
//}}*/

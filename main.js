const students = [
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
        <p id="studentHouse">${student.house}</p>
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


}

function expelStudent (event){
  const studentId = parseInt(event.target.getAttribute("data-id"), 10);

  const expelledStudent =students.find((student) => student.id === studentId);

  if (expelledStudent) {
    expelledStudents.push(expelledStudent);

  students = students.filter((student) => student.id !== studentId);

      const removeCard = event.target.closest(".card");
      removeCard.remove();

      app2.innerHTML += `<div class="card">
      <div class="card-header">
        Expelled
      </div>
      <div class="card-body">
        <h5 id="studentName">${expelledStudent.name}</h5>
        <p id="studentHouse">${expelledStudent.house}</p>
        <p>sadly, ${expelledStudent.name} has joined the dark side.</p>
      </div>
    </div>`
      };
    
    }
  

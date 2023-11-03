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

const exStudents = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1577764508125-32846c1428e9?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNsb3dufGVufDB8fDB8fHww",
    name: "Allie",
    house: "Gryffindor",
  },
]



const app = document.querySelector("#app")
const app2 = document.querySelector("#app2")




const sortButton = document.querySelector("#sortButton");


sortButton.addEventListener("click",renderToDom)
sortButton.addEventListener("click",addStudent)


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
        <a href="#" class="btn btn-primary expelButton">Expel</a>
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

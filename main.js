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
const app = document.querySelector("#app")


 /* const renderToDom () {
  // Create our domstring so we can push our cards to it
  let domString = ""
  // Loop over the array and create our pie cards
  for(student of students){
      domString += `<div class="card">
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

    console.log("ughh")
  }

  app.innerHTML = domString;

}*/
//form create student




const sortButton = document.querySelector("#sortButton")

sortButton.addEventListener("click",renderToDom)
sortButton.addEventListener("click",addStudent)

function renderToDom () {
  let domString = ""
  // Loop over the array and create our pie cards
  for(student of students){
      domString += `<div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
      <img src=${student.imageUrl} class="img" alt=${student.id}>
        <h5 id="studentName">${student.name}</h5>
        <p id="studentHouse">${student.house}</p>
        <a href="#" class="btn btn-primary">Expel</a>
      </div>
    </div>`

    console.log("ughh")
  }

app.innerHTML = domString;


}

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

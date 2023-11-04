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
const form = document.querySelector("#sortButton")
 const createStudent = (event) => {
  event.preventDefault()

//adding form to DOM
const newStudentObj = {
  id: students.length + 1,
  name: document.querySelector("#studentName").value,
};

students.unshift(newStudentObj)
renderToDom(students)
form.reset
console.log("I work");
};

sortButton.addEventListener('submit', createStudent);

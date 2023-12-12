const add = document.getElementById("add");
const read = document.getElementById("read");
const del = document.getElementById("del");
const update = document.getElementById("update");
const form = document.getElementById("form_form");
const reg = document.getElementById("reg");
const name = document.getElementById("name");
const course = document.getElementById("course");
const cgpa = document.getElementById("cgpa");

// creating an empty array for storing all the value from the user
const studentInfo=[];

// submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  // value reading given by user
  const stuReg = reg.value;
  const name1 = name.value;
  const course1 = course.value;
  const cgpa1 = cgpa.value;
 
  // creating a array for storing the value
  const obj = {
    stuReg,
    name1,
    course1,
    cgpa1,
  };

  // pushing the all value in array
  studentInfo.push(obj);


  // 
  form.setAttribute("style", "display:none");
});

// add button
add.addEventListener("click", () => {});

//read button
form_form.addEventListener("click", () => {});

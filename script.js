const add = document.getElementById("add");
const read = document.getElementById("read");
const del = document.getElementById("del");
const update = document.getElementById("update");
const form = document.getElementById("form_form");
const reg = document.getElementById("reg");
const name = document.getElementById("name");
const course = document.getElementById("course");
const cgpa = document.getElementById("cgpa");
const hi = document.getElementById("hi");
const submit = document.getElementById("submit");
const simran = document.getElementById("simran");
const deleteDiv = document.getElementById("hi_delete");
const removeBtn = document.getElementById("rem");
const removeInput = document.getElementById("rem_del");
const updateDiv = document.getElementById("for_update");
const updateBtn = document.getElementById("updateBtn");
const updateInput = document.getElementById("updateIn");

// creating an empty array for storing all the value from the user
let studentInfo = [];

// submit button

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
  simran.reset();
});

// add button
add.addEventListener("click", (e) => {
  e.preventDefault();
  hi.setAttribute("style", "display:none");
  deleteDiv.setAttribute('style','display:none');
  updateDiv.setAttribute('style','display:none');

  form.setAttribute("style", "display:flex");
});

const readBtn = (e) => {
  e.preventDefault();
  form.setAttribute("style", "display:none;");
  hi.setAttribute("style", "display:flex;");
  deleteDiv.setAttribute('style','display:none;');
  updateDiv.setAttribute('style','display:none;');
  hi.innerHTML = "";

  studentInfo.map((obj) => {
    console.log(obj);

    const { stuReg, name1, course1, cgpa1 } = obj;
    const div = document.createElement("div");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");

    para1.textContent = "stuReg " + stuReg;
    para2.textContent = "name1 " + name1;
    para3.textContent = "course1 " + course1;
    para4.textContent = "cgpa1 " + cgpa1;

    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    div.appendChild(para4);

    hi.appendChild(div);
  });
};

//read button
read.addEventListener("click", readBtn);

//delete button
del.addEventListener("click", (e) => {
  e.preventDefault();
  form.setAttribute("style", "display:none");
  updateDiv.setAttribute('style','display:none');
  hi.setAttribute("style", "display:none;");

  deleteDiv.setAttribute("style", "display:flex;");
});

//removeBtn button
removeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  alert("i am working");

  const remove_value = removeInput.value;

  console.log(remove_value);

  const filterData = studentInfo.filter((obj) => {
    return obj.stuReg != remove_value;
  });

  console.log(filterData);

  studentInfo = filterData;

  readBtn(e);
});

//update button
update.addEventListener("click", (e) => {
  e.preventDefault();
  form.setAttribute("style", "display:none;");
  deleteDiv.setAttribute('style','display:none;');
  updateDiv.setAttribute("style", "display:flex;");
});

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const update_value = updateInput.value;

  const filterData = studentInfo.filter((obj) => {
    return obj.stuReg == update_value;
  });
  console.log(filterData);

  form.setAttribute("style", "display:flex");

  const { stuReg, name1, course1, cgpa1 } = filterData[0];

  reg.value = stuReg;
  name.value = name1;
  course.value = course1;
  cgpa.value = cgpa1;

  function remove_simran(first, second) {
    const third = first.findIndex((obj) => obj.stuReg == second);

    if (third != -1) {
      first.splice(third, 1);
    }
  }

  remove_simran(studentInfo, update_value);
});

// const stuReg = reg.value;
// const name1 = name.value;
// const course1 = course.value;
// const cgpa1 = cgpa.value;

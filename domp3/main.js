
// document.getElementById("name");
// let messageEl = document.getElementById("goBack");


function goBack(){
    window.history.back();
}

window.onload = function(){

let savedData = localStorage.getItem("userData");

if(savedData){
document.getElementById("dataList").innerHTML = savedData;
}

}



function addData(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let number = document.getElementById("number").value;
let address = document.getElementById("Address").value;

let container = document.getElementById("dataList");

let user = document.createElement("div");

user.style.background = "white";
user.style.color = "black";
user.style.padding = "10px";
user.style.margin = "10px";

user.innerHTML =
"Name: " + name + "<br>" +
"Email: " + email + "<br>" +
"Number: " + number + "<br>" +
"Address: " + address + "<br>" +
"<button onclick= 'updateData(this)'>Update</button> " +
"<button onclick= 'deleteData(this)'>Delete</button>";

container.appendChild(user);

saveData();

// localStorage.setItem("userData",container.innerHTML);

document.querySelector("form").reset();

}

function deleteData(btn){

    let userBox = btn.parentElement;

    userBox.remove();

    saveData();
}

function updateData(btn){
    let userBox = btn.parentElement;

    let text = userBox.innerText.split("\n");

    document.getElementById("name").value = text[0].replace("name: ","");
    document.getElementById("email").value = text[1].replace("Email: ","");
    document.getElementById("number").value = text[2].replace("number: ","");
    document.getElementById("Address").value = text[3].replace("Address: ","");

    userBox.remove();

    saveData();
}

function saveData(){

    let container = document.getElementById("dataList");

    localStorage.setItem("userData",container.innerHTML);

}




const username = document.querySelector("#username");
const password = document.querySelector("#password");
const registerBtn = document.querySelector("#sign-in");

let regEx = /^[A-Za-z0-9]\w{8,}$/;
let reg =  /^[a-zA-Z\-]+$/;

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");


function user_check(){
  if(username.value.match(reg)){
    username.style.borderColor = "#27ae60";
    username.style.background = "#eafaf1";
    
  }else{
    username.style.borderColor = "#e74c3c";
    username.style.background = "#fceae9"; 
  }
}

function pass_check(){
  if(password.value.match(regEx)){
    password.style.borderColor = "#27ae60";
    password.style.background = "#eafaf1";
    
  }else{
    password.style.borderColor = "#e74c3c";
    password.style.background = "#fceae9"; 
  }
}

function send(e) {
  event.preventDefault();
  if(username.value == "" || password.value == "") {
    username.style.borderColor = "#e74c3c";
    username.style.background = "#fceae9";
    //
    password.style.borderColor = "#e74c3c";
    password.style.background = "#fceae9";
    //
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Fill date!'
    })
    return false;
  } else {

    if (
      getUser &&
      getUser === username.value &&
      getPassword &&
      getPassword === password.value
    ) {
      
      window.location = "index.html";
      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'username or password is wrong please try again '
      })
    }
  }
}

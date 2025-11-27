const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const registerBtn = document.querySelector("#sign-in");

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let regEx = /^[A-Za-z0-9]\w{8,}$/;
let reg =  /^[a-zA-Z\-]+$/;


function user_check(){
  if(username.value.match(reg)){
    username.style.borderColor = "#27ae60";
    username.style.background = "#eafaf1";
    
  }else{
    username.style.borderColor = "#e74c3c";
    username.style.background = "#fceae9"; 
  }
}

function email_check(){
  if(email.value.match(regExp)){
    email.style.borderColor = "#27ae60";
    email.style.background = "#eafaf1";
    
  }else{
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9"; 
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
  if(username.value == "" || email.value == "" || password.value == "") {
    username.style.borderColor = "#e74c3c";
    username.style.background = "#fceae9";
    //
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9"; 
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

    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    
    window.location.replace('login.html');
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const email=document.querySelector("#email");
const error=document.querySelector(".error-text");
const btn=document.querySelector("button");
const btn1=document.getElementById("button");
console.log(btn);
console.log(btn1);


let regExp=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check(){
  if(email.value.match(regExp)){
    email.style.borderColor="blue";
        error.style.display="none";
    }
  else{
      email.style.borderColor="#e74c3c";
      error.style.display="block";

  }
  if(email.value==""){
   email.style.borderColor="lightgrey";

 }
}

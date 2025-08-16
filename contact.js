
let form = document.querySelector("#contact-form");

form.addEventListener('submit',(e)=>{
    let fullName = document.querySelector(".name");
     fullName=fullName.value.trim();
     let email= document.querySelector(".email");
      email=email.value.trim();
      let message = document.querySelector(".feedback");
        message=message.value.trim();
      if(!fullName || !email || !message){
         alert("Please fill out all fields.");
         e.preventDefault();
      }
})
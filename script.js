
    alert("This is a demo website created for practice purposes only. Your data will not be stored anywhere, so feel free to enter any details.");

    let box1 = document.querySelector(".box1");
    let box2 = document.querySelector(".box2");
    let page2=document.querySelector(".page2");
      let page1=document.querySelector(".page1");
    let loginBtn = document.querySelector(".lo");
    let signupBtn = document.querySelector(".sos");

    // Hide signup at the start
    box2.style.display = "none";
     page1.style.display = "none";
    // When clicking Sign Up, show signup form
    signupBtn.addEventListener("click", () => {
        box1.style.display = "none";
        box2.style.display = "flex";
         page2.style.display = "none";
         page1.style.display = "flex";
    });

    // When clicking Login, show login form
    loginBtn.addEventListener("click", () => {
        box1.style.display = "flex";
        box2.style.display = "none";
        page2.style.display = "flex";
        page1.style.display = "none";
    });


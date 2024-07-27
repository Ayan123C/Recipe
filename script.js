//slide show top

var slides = document.querySelectorAll(".items");
let slide_ind=1;
showSlide(slide_ind);

function changeSlides(x){
    slide_ind+=x;
    showSlide(slide_ind);
}

function showSlide(n){
    if(n>slides.length){
        slide_ind=1;
    }
    if(n<1){
        slide_ind=slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_ind - 1].style.display = "flex";
}

//slider end----------


var f_slides = document.querySelectorAll(".feature-items");
let featslide_ind=1;
featureShowSlides(featslide_ind);

function featurechangeSlides(x){
    featslide_ind+=x;
    featureShowSlides(featslide_ind);
}

function featureShowSlides(n){
    if(n>f_slides.length){
        featslide_ind=1;
    }
    if(n<1){
        featslide_ind=f_slides.length;
    }
    for (i = 0; i < f_slides.length; i++) {
        f_slides[i].style.display = "none";
    }
    f_slides[featslide_ind - 1].style.display = "flex";
}




// login-btn--

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const loginContainer = document.getElementById("loginContainer");

    loginBtn.addEventListener("click", () => {
        loginContainer.style.display = "flex";
    });

    // loginContainer.addEventListener("click", () => {
    //         loginContainer.style.display = "none";
    // });
});




//local storage:-

// document.addEventListener("DOMContentLoaded", () => {
//     let ind=1,pass=1;
//     const loginBtn = document.getElementById("loginBtn");
//     const loginContainer = document.getElementById("loginContainer");
//     const loginForm = document.getElementById("loginForm");
//     const creatAccount=document.getElementById("createAccount");
//     const loginContainerC = document.getElementById("loginContainerC");


//     // Store test credentials in local storage (for initial testing)
//     // localStorage.setItem('username1', 'testUser');
//     // localStorage.setItem('password1', 'testPass');

//     loginBtn.addEventListener("click", () => {
//         loginContainer.style.display = "flex";
//     });

//     // loginContainer.addEventListener("click", (e) => {
//     //     if (e.target === loginContainer) {
//     //         loginContainer.style.display = "none";
//     //     }
//     // });

//     loginForm.addEventListener("submit", (e) => {
//         e.preventDefault(); // Prevent form submission

//         const username = document.getElementById("username").value;
//         const password = document.getElementById("password").value;

//         // Retrieve stored credentials
//         const storedUsername = localStorage.getItem('username');
//         const storedPassword = localStorage.getItem('password');

//         // Check if entered credentials match stored credentials
//         if (username === storedUsername && password === storedPassword) {
//             alert("Login successful!");
//             // Hide login container after successful login
//             loginContainer.style.display = "none";
//             loginBtn.style.display="none";
//         } else {
//             alert("Invalid username or password.");
//         }
//     });

//     createAccount.addEventListener("click",()=>{
//         loginContainerC.style.display="flex";

//     });

//     createAccountC.addEventListener("click",()=>{
//         const username = document.getElementById("usernameC").value;
//         const password = document.getElementById("passwordC").value;

//         localStorage.setItem(`username${ind+1}`, username);
//         localStorage.setItem(`password${pass+1}`, password);

        
//             // Hide login container after successful login

//                 alert("Login successful!");
//                 loginContainerC.style.display = "none";
//                 loginContainer.style.display = "none";
//                 loginBtn.style.display="none";
//             });
            

// });




document.addEventListener("DOMContentLoaded", () => {
    let ind=1,pass=1;
    const loginBtn = document.getElementById("loginBtn");
    const loginContainer = document.getElementById("loginContainer");
    const loginForm = document.getElementById("loginForm");
    const creatAccount=document.getElementById("createAccount");
    const loginContainerC = document.getElementById("loginContainerC");


    // Store test credentials in local storage (for initial testing)
    // localStorage.setItem('username1', 'testUser');
    // localStorage.setItem('password1', 'testPass');

    loginBtn.addEventListener("click", () => {
        loginContainer.style.display = "flex";
    });

    // loginContainer.addEventListener("click", (e) => {
    //     if (e.target === loginContainer) {
    //         loginContainer.style.display = "none";
    //     }
    // });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Retrieve stored credentials
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Check if entered credentials match stored credentials
        if (username === storedUsername && password === storedPassword) {
            alert("Login successful!");
            // Hide login container after successful login
            loginContainer.style.display = "none";
            loginBtn.style.display="none";
        } else {
            alert("Invalid username or password.");
        }
    });

    createAccount.addEventListener("click",()=>{
        loginContainerC.style.display="flex";

    });

    createAccountC.addEventListener("click",()=>{
        const username = document.getElementById("usernameC").value;
        const password = document.getElementById("passwordC").value;

        localStorage.setItem(`username`, username);
        localStorage.setItem(`password`, password);

        
            // Hide login container after successful login

                alert("Login successful!");
                loginContainerC.style.display = "none";
                loginContainer.style.display = "none";
                loginBtn.style.display="none";
            });
            

});

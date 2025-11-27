
    // add username in [ index.html ]

    let userInfo = document.querySelector("#user_info");
    let userDom = document.querySelector("#user");
    let logoutBtn = document.querySelector("#logout");
    let signInBtn = document.querySelector("#signin");

    let username = localStorage.getItem("username");
    if(username) {
        userDom.innerHTML = username;
        userDom.style.display = "inline-block";
        signInBtn.style.display = "none";
    } else {
        userDom.innerHTML = " Please Sign In ";
        userDom.style.display = "inline-block";
        logoutBtn.style.display = "none";
        signInBtn.style.display = "block";
    }

    logoutBtn.addEventListener("click", function(e) {
        e.preventDefault()
        localStorage.clear();
        setTimeout(() => { 
            window.location= "register.html";
        }, 500);
    })


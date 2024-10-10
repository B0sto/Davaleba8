document.getElementById("userForm").addEventListener('submit', function(event) {

    let isValidPass = true;

    const userPattern = /^[a-zA-Z0-9_]{3,15}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const userInput = document.getElementById("user").value;
    const passInput = document.getElementById("pass").value;
    const emailInput = document.getElementById("email").value;
    
    const userResult = document.getElementById("userResult");
    const emailResult = document.getElementById("emailResult");
    const passResult = document.getElementById("passResult");

    if (!userPattern.test(userInput)) {
        userResult.style.color = "red";
        userResult.textContent = "Invalid username";
        isValidPass = false;
    }else {
        userResult.style.color = "green";
        userResult.textContent = "Valid username";
    }

    if (!emailPattern.test(emailInput)) {
        emailResult.style.color = "red";
        emailResult.textContent = "Invalid Email";
        isValidPass = false;
    }else {
        emailResult.style.color = "green"
        emailResult.textContent = "Valid Email"
    }


    if (!passPattern.test(passInput)) {
        passResult.style.color = "red";
        passResult.textContent = "Invalid Password";
        isValidPass = false;
    }else {
        passResult.style.color = "green";
        passResult.textContent = "Valid Password";
    }

    event.preventDefault();

    if (isValidPass) {
        setTimeout(() => {
            document.getElementById("userForm").submit();
        }, 1000);
    }
})


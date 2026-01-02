let users = [];
function showWork(type) {
    document.querySelectorAll(".work-box").forEach((x) => (x.style.display = "none"));
    document.getElementById(type).style.display = "block";
}
function openSignup() {
    signupModal.style.display = "block";
}
function openSignin() {
    signinModal.style.display = "block";
}
function closeModal() {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
    packModal1.style.display = "none";
    packModal2.style.display = "none";
    packModal3.style.display = "none";
    purchaseModal.style.display = "none";
}

function purchasePack() {
    purchaseModal.style.display = "Block";
}

function openPack1() {
    packModal1.style.display = "block";
}

function openPack2() {
    packModal2.style.display = "block";
}

function openPack3() {
    packModal3.style.display = "block";
}

function signup() {
    let user = {
        name: name.value,
        username: username.value,
        country: country.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    };
    users.push(user);
    console.log("Registered Users:", users);
    alert("Registration Successful!");
    closeModal();
}
function login() {
    let found = users.find((u) => u.username == loginUser.value && u.password == loginPass.value);
    if (found) {
        console.log("Login Success:", found);
        alert("Welcome " + found.name);
        closeModal();
    } else alert("Invalid Credentials");
}

function verificationStorage() {

    if (localStorage.length != 0) {
        window.location.href = "file:///C:/Users/3elmi/Desktop/Salem/Login/Login.html";
    }
}

function register() {
    let UsernameInput = document.getElementById("Username");
    let PasswordInput = document.getElementById("Password");

    localStorage.setItem("Username", UsernameInput.value);
    localStorage.setItem("Password", PasswordInput.value);

    let a = localStorage.getItem("Username");
    let b = localStorage.getItem("Password");

    if (localStorage.length != 0) {
        window.location.href = "file:///C:/Users/3elmi/Desktop/Salem/Login/Login.html";
    }
}
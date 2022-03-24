function login() {

    let UsernameInput = document.getElementById("Username")
    let PasswordInput = document.getElementById("Password")

    let a = localStorage.getItem("Username");
    let b = localStorage.getItem("Password");
    if (UsernameInput.value == a && PasswordInput.value == b) {
        window.location.href = "file:///C:/Users/3elmi/Desktop/Salem/welcome.html"
    } else { alert("Error 404 : Wrong Informations") }

}
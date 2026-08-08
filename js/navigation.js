document.addEventListener("DOMContentLoaded", function () {
    const authButton = document.getElementById("authButton");
    if (!authButton) {
        return;
    }
    const currentUser = sessionStorage.getItem("currentUser");
    if (currentUser) {
        authButton.textContent = "Logout";
        authButton.href = "#";
        authButton.addEventListener("click", function (event) {
            event.preventDefault();
            sessionStorage.removeItem("currentUser");
            window.location.href = "login.html";
        });
    } else {
        authButton.textContent = "Login";
        authButton.href = "login.html";
    }
});
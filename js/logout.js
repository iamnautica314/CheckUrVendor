const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        event.preventDefault();
        sessionStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
}
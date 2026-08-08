const currentUser = sessionStorage.getItem("currentUser");
if (!currentUser) {
    window.location.href = "login.html";
}
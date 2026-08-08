const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const forgotPassword = document.getElementById("forgotPassword");
if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "Show";
        }
    });
}
if (forgotPassword) {
    forgotPassword.addEventListener("click", function (event) {
        event.preventDefault();
        alert(
            "Password recovery will be available in a future version."
        );
    });
}
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username =
            document.getElementById("username").value.trim();
        const password =
            document.getElementById("password").value;
        const rememberMe =
            document.getElementById("rememberMe").checked;
        if (username === "" || password === "") {
            alert(
                "Please enter your username/email and password."
            );
            return;
        }
        const savedAccount =
    JSON.parse(
        localStorage.getItem("demoAccount")
    );
if (savedAccount) {
    if (
        username !== savedAccount.email &&
        username !== savedAccount.fullName
    ) {
        alert(
            "Account not found. Please check your email or username."
        );
        return;
    }
    if (password !== savedAccount.password) {
        alert(
            "Incorrect password."
        );
        return;
    }
}
        const demoUser = {
            username: username
        };
        sessionStorage.setItem(
            "currentUser",
            JSON.stringify(demoUser)
        );
        if (rememberMe) {
            localStorage.setItem(
                "rememberedUser",
                username
            );
        } else {
            localStorage.removeItem(
                "rememberedUser"
            );
        }
        console.log(
            "Demo login successful:",
            demoUser
        );
        window.location.href = "dashboard.html";
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const createAccountForm =
        document.getElementById("createAccountForm");
    if (!createAccountForm) {
        console.error("Create account form not found.");
        return;
    }
    createAccountForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const fullName =
            document.getElementById("fullName").value.trim();
        const email =
            document.getElementById("accountEmail").value.trim();
        const password =
            document.getElementById("accountPassword").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;
        if (
            fullName === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please complete all fields.");
            return;
        }
        if (password.length < 8) {
            alert(
                "Password must be at least 8 characters."
            );
            return;
        }
        if (password !== confirmPassword) {
            alert(
                "Passwords do not match."
            );
            return;
        }
        const demoAccount = {
            fullName: fullName,
            email: email,
            password: password
        };
        localStorage.setItem(
            "demoAccount",
            JSON.stringify(demoAccount)
        );
        console.log(
            "Demo account created successfully:",
            demoAccount
        );
        alert(
            "Account created successfully! Please log in."
        );
        window.location.href = "login.html";
    });
});
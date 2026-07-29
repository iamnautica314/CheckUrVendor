const form = document.getElementById("assessmentForm");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
form.addEventListener("input", updateProgress);
form.addEventListener("change", updateProgress);
updateProgress();
function updateProgress() {
    const textInputs = form.querySelectorAll(
        "input:not([type='radio']), select"
    );
    let completed = 0;
    textInputs.forEach(input => {
        if (input.value.trim() !== "") {
            completed++;
        }
    });
    const radioGroups = [
        ...new Set(
            [...form.querySelectorAll("input[type='radio']")]
                .map(radio => radio.name)
        )
    ];
    radioGroups.forEach(group => {
        if (form.querySelector(`input[name="${group}"]:checked`)) {
            completed++;
        }
    });
    const totalItems = textInputs.length + radioGroups.length;
    const percent = Math.round((completed / totalItems) * 100);
    progressFill.style.width = percent + "%";
    progressPercent.textContent = percent + "% Complete";
    updateChecklist();
}
function updateChecklist() {
    updateSection(
        "vendorStatus",
        ".assessment-section:nth-of-type(1)"
    );
    updateSection(
        "iamStatus",
        ".assessment-section:nth-of-type(2)"
    );
    updateSection(
        "dataStatus",
        ".assessment-section:nth-of-type(3)"
    );
    updateSection(
        "governanceStatus",
        ".assessment-section:nth-of-type(4)"
    );
    updateSection(
        "changeStatus",
        ".assessment-section:nth-of-type(5)"
    );
    updateSection(
        "networkStatus",
        ".assessment-section:nth-of-type(6)"
    );
    updateSection(
        "incidentStatus",
        ".assessment-section:nth-of-type(7)"
    );
    updateSection(
        "bcpStatus",
        ".assessment-section:nth-of-type(8)"
    );
}
function updateSection(checkId, selector) {
    const section = document.querySelector(selector);
    if (!section) return;
    const inputs = section.querySelectorAll("input, select");
    let complete = true;
    inputs.forEach(input => {
        if (input.type === "radio") {
            if (!section.querySelector(`input[name="${input.name}"]:checked`)) {
                complete = false;
            }
        } else {
            if (input.value.trim() === "") {
                complete = false;
            }
        }
    });
    const item = document.getElementById(checkId);
    if (complete) {
        item.textContent = "✅ " + item.textContent.replace("⬜ ", "").replace("✅ ", "");
    } else {
        item.textContent = "⬜ " + item.textContent.replace("⬜ ", "").replace("✅ ", "");
    }
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const results = evaluateVendor();
    console.log(results);
    sessionStorage.setItem(
        "vendorResults",
        JSON.stringify(results)
    );
    window.location.href = "results.html";
});
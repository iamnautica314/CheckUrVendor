const history =
JSON.parse(localStorage.getItem("vendorHistory")) || [];
console.log(history);
document.getElementById("totalVendors").textContent =
history.length;
let totalScore = 0;
history.forEach(item => {
    totalScore += item.score;
});
const average =
history.length
?
Math.round(totalScore / history.length)
:
0;
document.getElementById("averageScore").textContent =
average + "%";
const high =
history.filter(v =>
v.risk === "High Risk"
).length;
const low =
history.filter(v =>
v.risk === "Low Risk"
).length;
document.getElementById("highRiskCount").textContent =
high;
document.getElementById("lowRiskCount").textContent =
low;
const table =
document.getElementById("historyTable");
history.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.vendor}</td>
        <td>${item.score}%</td>
        <td>${item.risk}</td>
        <td>${item.date}</td>
    `;
    table.appendChild(row);
});
const vendors =
    JSON.parse(localStorage.getItem("vendorHistory")) || [];
console.log(vendors);
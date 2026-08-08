const domainNames = {
    iam: "🔐 Identity & Access Management",
    dataProtection: "🔒 Data Protection",
    governance: "📋 Governance & Compliance",
    changeManagement: "⚙️ Change & Vulnerability Management",
    networkSecurity: "🌐 Network Security",
    incidentResponse: "🚨 Incident Response",
    businessContinuity: "🔄 Business Continuity & Disaster Recovery"
};
const recommendations = {
iam:
"Enable Multi-Factor Authentication and review privileged user access.",
dataProtection:
"Improve encryption, backup procedures, and data protection controls.",
governance:
"Strengthen governance policies, security awareness training, and compliance documentation.",
changeManagement:
"Improve vulnerability management, change control, and patch management processes.",
networkSecurity:
"Enhance firewall rules, intrusion detection, and network monitoring.",
incidentResponse:
"Develop and regularly test your incident response plan.",
businessContinuity:
"Review and test business continuity and disaster recovery plans."
};
const results =
JSON.parse(localStorage.getItem("vendorRiskResults"));
if(results){
document.getElementById("overallScore").textContent =
results.overallScore + "%";
const overallFill =
document.getElementById("overallFill");
overallFill.style.width =
results.overallScore + "%";
const badge =
document.getElementById("riskBadge");
badge.textContent =
results.overallRisk;
badge.style.display = "inline-block";
if (results.overallRisk === "Low Risk") {
    badge.className = "risk-badge risk-low";
}
else if (results.overallRisk === "Moderate Risk") {
    badge.className = "risk-badge risk-medium";
}
else {
    badge.className = "risk-badge risk-high";
}
}
const domainContainer =
document.getElementById("domainResults");
for(const domain in results.domainScores){
const row=document.createElement("div");
row.className = "domain-row";
let color = "#27AE60";

if(results.domainScores[domain] < 50){
    color = "#EB5757";
}
else if(results.domainScores[domain] < 70){
    color = "#F2C94C";
}
row.innerHTML = `
<div class="domain-info">
    <strong>${domainNames[domain]}</strong>
    <span>${results.domainScores[domain]}%</span>
</div>
<div class="score-bar">
    <div
        class="score-fill"
        style="
            width:${results.domainScores[domain]}%;
            background:${color};
        ">
    </div>
</div>
`;
domainContainer.appendChild(row);
}
const recommendationList =
document.getElementById("recommendationList");
for(const domain in results.domainScores){
if(results.domainScores[domain]<70){
const item =
document.createElement("div");
item.className =
"recommendation-card";
item.innerHTML = `
<h4>${domainNames[domain]}</h4>
<p>${recommendations[domain]}</p>
`;
recommendationList.appendChild(item);
}
}
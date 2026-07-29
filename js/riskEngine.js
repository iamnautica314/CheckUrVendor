function calculateDomainScore(questionNames) {
    let totalPoints = 0;
    let answeredQuestions = 0;
    questionNames.forEach(question => {
        const selected =
            document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value !== "na") {
            totalPoints += Number(selected.value);
            answeredQuestions++;
        }
    });
    if (answeredQuestions === 0) {
        return 0;
    }
    const maxPoints = answeredQuestions * 10;
    return Math.round((totalPoints / maxPoints) * 100);
}
function calculateAllDomains() {
    return {
        iam: calculateDomainScore(["q1","q2","q3"]),
        dataProtection:
            calculateDomainScore(["q4","q5","q6"]),
        governance:
            calculateDomainScore(["q7","q8","q9"]),
        changeManagement:
            calculateDomainScore(["q10","q11","q12"]),
        networkSecurity:
            calculateDomainScore(["q13","q14","q15"]),
        incidentResponse:
            calculateDomainScore(["q16","q17","q18"]),
        businessContinuity:
            calculateDomainScore(["q19","q20"])
    };
}
function calculateOverallRisk(domainScores) {
    const scores = Object.values(domainScores);
    const total =
        scores.reduce((sum, score) => sum + score, 0);
    return Math.round(total / scores.length);
}
function calculateOverallRisk(domainScores) {
    const scores = Object.values(domainScores);
    const total =
        scores.reduce((sum, score) => sum + score, 0);
    return Math.round(total / scores.length);
}
function determineRiskLevel(score) {
    if (score >= 90)
        return "Excellent";
    if (score >= 75)
        return "Good";
    if (score >= 60)
        return "Moderate Risk";
    if (score >= 40)
        return "Needs Improvement";
    return "High Risk";
}
function evaluateVendor() {
    const domainScores =
        calculateAllDomains();
    const overallScore =
        calculateOverallRisk(domainScores);
    const overallRisk =
        determineRiskLevel(overallScore);
    return {
        domainScores,
        overallScore,
        overallRisk
    };
}
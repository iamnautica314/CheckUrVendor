function evaluateVendor() {
    const domains = {
        iam: ["q1", "q2", "q3"],
        dataProtection: ["q4", "q5", "q6"],
        governance: ["q7", "q8", "q9"],
        changeManagement: ["q10", "q11", "q12"],
        networkSecurity: ["q13", "q14", "q15"],
        incidentResponse: ["q16", "q17", "q18"],
        businessContinuity: ["q19", "q20"]
    };
    let domainScores = {};
    let incompleteQuestions = [];
    for (let domain in domains) {
        let totalScore = 0;
        let answeredQuestions = 0;
        domains[domain].forEach(question => {
            let answer = document.querySelector(
                `input[name="${question}"]:checked`
            );
            if (answer) {
                if (answer.value !== "na") {
                    totalScore += Number(answer.value);
                    answeredQuestions++;
                }
            } else {
                incompleteQuestions.push(question);
            }
        });
        if (answeredQuestions > 0) {
            domainScores[domain] = Math.round(
                totalScore /
                (answeredQuestions * 10) *
                100
            );
        } else {
            domainScores[domain] = null;
        }
    }
    let completedDomains = Object.values(domainScores)
        .filter(score => score !== null);
    let overallScore = 0;
    if (completedDomains.length > 0) {
        overallScore = Math.round(
            completedDomains.reduce(
                (a, b) => a + b,
                0
            ) / completedDomains.length
      );
    }
    let riskLevel;
    if (overallScore >= 80) {
        riskLevel = "Low Risk";
    }
    else if (overallScore >= 50) {
        riskLevel = "Moderate Risk";
    }
    else {
        riskLevel = "High Risk";
    }
    const results = {
        domainScores,
        overallScore,
        riskLevel,
        incompleteQuestions
    };
    console.log(
        "Vendor Risk Results:",
        results
    );
    localStorage.setItem(
        "vendorRiskResults",
        JSON.stringify(results)
    );
    return results;
}
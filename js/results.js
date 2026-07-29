const storedResults =
    sessionStorage.getItem("vendorResults");
if(storedResults){
    const results =
        JSON.parse(storedResults);
    console.log(results);
    document.getElementById("overallScore")
        .textContent =
        results.overallScore + "%";
    document.getElementById("overallRisk")
        .textContent =
        results.overallRisk;
}
else{
    document.getElementById("overallRisk")
        .textContent =
        "No assessment results found";
}
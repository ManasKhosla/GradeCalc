document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateGrade);
});

function calculateGrade() {
    const marks = parseFloat(document.getElementById("marks").value);
    const total = parseFloat(document.getElementById("total").value);

    if (isNaN(marks) || isNaN(total)) {
        document.getElementById("result").textContent = "Please enter valid numbers for marks and total.";
        return;
    }

    const percentage = (marks / total) * 100;

    let grade = "";
    if (percentage > 100){
        grade = "NaN";
    } else if (percentage >= 95) {
        grade = "A+";
    } else if (percentage >= 85) {
        grade = "A";
    } else if (percentage >= 75) {
        grade = "B+";
    } else if (percentage >= 65) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }
    round_per = parseFloat(percentage).toFixed(2)
    console.log("Called")
    document.getElementById("percentage").textContent = `Percentage : ${round_per}%`;
    document.getElementById("result").textContent = `Grade : ${grade}`;
}

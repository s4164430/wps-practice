function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById('result').innerHTML = 
        `Your BMI is ${bmi.toFixed(1)}`;
}
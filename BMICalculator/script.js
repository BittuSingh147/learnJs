function calculateBMI() {
  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  // Calculate BMI
  const bmi = weight / (height * height);

  // Display result
  let resultText = '';
  if (isNaN(bmi)) {
      resultText = 'Please enter valid values for weight and height.';
  } else {
      resultText = `Your BMI is ${bmi.toFixed(2)}.`;
  }
  
  document.getElementById('result').textContent = resultText;
}

function calculateAge() {
    const dob = document.getElementById('dob').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
  
    // Validate input
    if (!dob || !month || !year) {
      showError("Please enter valid values for all fields.");
      return;
    }
  
    // Create a Date object for current date
    const currentDate = new Date();
  
    // Create a Date object for the input date of birth
    const inputDate = new Date(`${year}-${month}-${dob}`);
  
    // Check if the input date is valid
    if (isNaN(inputDate.getFullYear())) {
      showError("Please enter a valid date.");
      return;
    }
  
    // Calculate age
    let age = currentDate.getFullYear() - inputDate.getFullYear();
  
    // Check if the current date is before the birthday this year
    if (currentDate.getMonth() < inputDate.getMonth() || 
        (currentDate.getMonth() === inputDate.getMonth() && 
        currentDate.getDate() < inputDate.getDate())) {
      age--;
    }
  
    
        showResult(`Your age is: ${age} `);
   
  
  }
  
  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    
    // Insert error message before the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.appendChild(errorDiv);
  }
  
  function showResult(message) {
    const resultDiv = document.getElementById('result');
    
  
    resultDiv.innerHTML = message;

  }
  
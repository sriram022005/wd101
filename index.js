window.onload = function () {
    // Load previous data from localStorage
    loadPreviousData();
  };

  function loadPreviousData() {
    var savedData = JSON.parse(localStorage.getItem('registrationData'));
    if (savedData) {
      // Add previous data to the table
      addRowToTable(savedData);
    }
  }

  function submitForm() {
    // (Your existing submitForm function remains unchanged)
    // ...

    // Clear form fields
    document.getElementById("registrationForm").reset();

    // Load previous data from localStorage and add to the table
    loadPreviousData();
  }

  function addRowToTable(data) {
    var table = document.getElementById("dataTable");
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = data.username;
    cell2.innerHTML = data.email;
    cell3.innerHTML = data.password;
    cell4.innerHTML = data.dob;

    // Display "Yes" if terms are accepted, "No" otherwise
    cell5.innerHTML = data.acceptedTerms ? "Yes" : "No";
  }

  function isValidAge(dob) {
    var dobDate = new Date(dob);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobDate.getFullYear();
    return age >= 18 && age <= 55;
  }
function calculateAge(event) {
  event.preventDefault();

  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  if (!day || !month || !year) {
      errorMessage.textContent = "All fields are required.";
      return;
  }

  var birthDate = new Date(year, month - 1, day);
  var today = new Date();

  if (birthDate > today) {
      errorMessage.textContent = "The birth date cannot be in the future.";
      return;
  }

  var oldestPersonAge = 122;
  var currentYear = today.getFullYear();
  if (year < currentYear - oldestPersonAge) {
      errorMessage.textContent = "You can't be that old.";
      return;
  }

  var ageYears = today.getFullYear() - birthDate.getFullYear();
  var ageMonths = today.getMonth() - birthDate.getMonth();
  var ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
  }

  document.getElementById("years").textContent = ageYears;
  document.getElementById("months").textContent = ageMonths;
  document.getElementById("days").textContent = ageDays;
}

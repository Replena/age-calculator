function validateForm() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (day == "" || month == "" || year == "") {
      alert("All fields are required.");
      return false;
    }
    return true;
  }
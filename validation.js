function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    const facilitatorName = document.getElementById("facilitator");
    if (firstName.value.length <= 2 || lastName.value.length <= 2) {
      alert("A minimum length of two (2) characters");
      return false;
    } else {
      return true;
    }
    //Validate facilitator and constrain the possible valid values to
  //be those of the active facilitators for the course during this
  //semester. For example, if we have facilitators with the following first
  //names: “Laura”, “Fazil”, and “Harsh”, you would ensure that only
  //these values would pass validation
    const facilitatorName = 'Fazil'
  document.getElementById("demo").innerHTML = facilitatorName;
  }
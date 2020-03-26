function submitStep() {
  var password = document.getElementById("onePassword").value;
  var login = document.getElementById("login").value;

  var data = {
    password: password,
    login: login
  };

  console.log(data);
  console.log("Pre ajax");

  $.post({
    url: "/check",
    type: "POST",
    data: JSON.stringify(data),
    processData: false,
    contentType: "application/json; charset=utf-8",
    success: function(data) {
      console.log("Submission was successful.");
      console.log(data);
    },
    error: function(data) {
      console.log("An error occurred.");
      console.log(data);
    }
  });

  console.log("After ajax");
}

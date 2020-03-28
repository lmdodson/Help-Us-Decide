function submitStep() {

  // grab user input
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  if (password == "") {
    alert("Please enter valid login information.");
  }

  // user object
  var userData = {
    user: user,
    password: password,
  };

  console.log(userData);
  userCheck = function (userData) {

    // pull the data from api users
    $.get("api/users", function (data) {

      // iterate through the users in the api
      for (var i = 0; i < data.length; i++) {

        // check the user data against what is in the database
        if (data[i].user == userData.user && data[i].password == userData.password) {
          console.log("user exists");
          console.log("next step!")

          // open the sucess modal if the user passes the check
          $('#successModal').modal();
          $('#successModal').modal('open');

          // when users click continue on the modal, pass user to the next page
          document.getElementById("continueButton").href = "/platforms";
          return (userData);
        } else {
          console.log("user doesn't exist")
          $('#failModal').modal();
          $('#failModal').modal('open');

          // when users click continue on the modal, pass user to the next page
          function close() {
            $('#failModal').modal('close');
          };

        }
      }
    })
  }

  // call the userCheck function, passing in the user input
  userCheck(userData);
}
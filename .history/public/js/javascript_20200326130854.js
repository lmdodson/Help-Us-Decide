function submitStep() {
  var user = document.getElementById("user").value;
  // var password = document.getElementById("password").value;
  // var login = document.getElementById("login").value;

  if (password == "") {
    alert("We need more information...");
  }

  var userData = {
    user: user
    // password: password,
    // login: login
  };

  console.log(userData);
  function userCeck(userData){
$.get("api/users", function (data) {
  for (var i =0; i < data.length; i++) {
    if (data[i] == userData) {
      console.log ("user exists")
    } else {
      console.log ("user doesn't exist")
    }
  }
})
  }
}
//   $.ajax({
//     url: "/check",
//     type: "post",
//     data: JSON.stringify(data),
//     processData: false,
//     contentType: "application/json; charset=utf-8",
//     success: function(data) {
//       if (data.success) {
//         if (data.modal) {
//           $('#successModal').modal();
//           $('#successModal').modal('open');
//           document.getElementById("continueButton").href = "/" + data.nextPage;
//         } else {
//           window.location.href = "/" + data.nextPage;
//         }
//       } else {
//         setFailedResponse();
//         document.getElementById("onePassword").value = "";
//         document.getElementById("onePassword").focus();
//         document.getElementById("onePassword").blur();
//       }
//     },
//     error: function(jqXhr, textStatus, errorThrown) {
//       // console.log("Whoops");
//     }
//   });
// }

// function setFailedResponse() {
//   document.getElementById("responseText").innerHTML = "No good...";
//   setTimeout("clearedFailedResponse()", 2000);
// }

// function clearedFailedResponse() {
//   document.getElementById("responseText").innerHTML = " ";
// }
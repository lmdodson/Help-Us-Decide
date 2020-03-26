function submitStep() {
  var password = document.getElementById("onePassword").value;
  var level = document.getElementById("level").value;

  if (password == "") {
    alert("We need more information...");
  }

  var data = {
    password: password,
    level: level
  };

  $.ajax({
    url: "/check",
    type: "post",
    data: JSON.stringify(data),
    processData: false,
    contentType: "application/json; charset=utf-8",
    success: function(data) {
      if (data.success) {
        if (data.modal) {
          if (data.audio) {
            $("#successModal").modal();
            $("#successModal").modal("open");

            if (!data.picture) {
              var element = document.getElementById("modalPicture");
              element.parentNode.removeChild(element);
            } else {
              document.getElementById("theModalPicture").src = data.pictureUrl;
            }

            document.getElementById("audioSourceMp3").src = data.audioFileMp3;
            document.getElementById("audioSourceOgg").src = data.audioFileOgg;
            document.getElementById("audioSourceWav").src = data.audioFileWav;
            document.getElementById("theSuperSecretAudio").load();
            document.getElementById("theSuperSecretAudio").play();
          }
          document.getElementById("continueButton").href = "/" + data.nextPage;
        } else {
          window.location.href = "/" + data.nextPage;
        }
      } else {
        setFailedResponse();
        document.getElementById("onePassword").value = "";
        document.getElementById("onePassword").focus();
        document.getElementById("onePassword").blur();
      }
    },
    error: function(jqXhr, textStatus, errorThrown) {
      // console.log("Whoops");
    }
  });
}

function setFailedResponse() {
  document.getElementById("responseText").innerHTML = "No good...";
  setTimeout("clearedFailedResponse()", 2000);
}

function clearedFailedResponse() {
  document.getElementById("responseText").innerHTML = " ";
}

function hashPassword(password) {
  return password;
}

function submitLoginForm(useForm, iEmail, iPass) {
  var email = "";
  var password = "";

  if (!useForm) {
    email = iEmail;
    password = iPass;
  } else {
    email = document.getElementById("loginEmail").value;
    password = document.getElementById("loginPassword").value;
  }

  var data = {
    email: email,
    password: password
  };

  $.ajax({
    url: "/account/login",
    type: "post",
    data: JSON.stringify(data),
    processData: false,
    contentType: "application/json; charset=utf-8",
    success: function(data) {
      if (data.success) {
        window.location.href = "/";
      } else {
        alert("Login Failed.");
        document.getElementById("loginPassword").value = "";
        document.getElementById("loginPassword").focus();
        document.getElementById("loginPassword").blur();
      }
    },
    error: function(jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}

function submitRegisterForm() {
  var email = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;
  var confirmPassword = document.getElementById("registerPasswordConfirm")
    .value;

  var progressBar = document.getElementById("progressBar");
  document.getElementById("registerButton").disabled = true;
  progressBar.style.visibility = "visible";

  if (!password || !email || !confirmPassword) {
    alert("Complete Form");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    var data = {
      email: email,
      password: password
    };

    $.ajax({
      url: "/account/create",
      type: "post",
      data: JSON.stringify(data),
      processData: false,
      contentType: "application/json; charset=utf-8",
      success: function(data) {
        var progressBar = document.getElementById("progressBar");
        document.getElementById("registerButton").disabled = false;
        progressBar.style.visibility = "hidden";

        if (data.success) {
          alert("Account Created");
          submitLoginForm(false, email, password);
          // window.location.href = "/login";
        } else {
          alert("FAILED TO CREATE ACCOUNT");
        }
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });

    var progressBar = document.getElementById("progressBar");
    document.getElementById("registerButton").disabled = false;
    progressBar.style.visibility = "hidden";
  }
}

function submitFlag() {
  var flag = document.getElementById("flagSubmissionField").value;

  if (!flag) {
    alert("Submission is empty!");
  } else {
    var data = {
      flag: flag
    };

    $.ajax({
      url: "/account/submitFlag",
      type: "post",
      data: JSON.stringify(data),
      processData: false,
      contentType: "application/json; charset=utf-8",
      success: function(data) {
        if (data.success) {
          alert("Correct! Congratulations!");
          window.location.reload();
        } else {
          // get random response... cycle through a set of responses..
          alert("INCORRECT! HAHAHAHAAAA!!!  ");
        }
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }
}

function resetPassword() {
  var email = document.getElementById("resetEmail").value;

  if (!email) {
    alert("Please input email");
  } else {
    var data = {
      email: email
    };

    var progressBar = document.getElementById("progressBar");
    document.getElementById("resetPasswordButton").disabled = true;
    progressBar.style.visibility = "visible";

    $.ajax({
      url: "/account/reset",
      type: "post",
      data: JSON.stringify(data),
      processData: false,
      contentType: "application/json; charset=utf-8",
      success: function(data) {
        if (data.success) {
          alert("Check your email for password recovery link");
          window.location.href = "/";
        } else {
          alert(
            "Failed to reset password. Please try again later or contact support."
          );
          window.location.href = "/login";
        }
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });

    var progressBar = document.getElementById("progressBar");
    document.getElementById("resetPasswordButton").disabled = false;
    progressBar.style.visibility = "hidden";
  }
}

function setNewPassword() {
  var newPassword = document.getElementById("resetPasswordField").value;
  var newPasswordConfirmed = document.getElementById(
    "resetPasswordFieldConfirm"
  ).value;
  var token = document.getElementById("linkToken").value;

  console.log(token);

  if (
    !newPassword ||
    !newPasswordConfirmed ||
    newPassword !== newPasswordConfirmed
  ) {
    alert("Passwords do not match!");
  } else {
    var data = {
      token: token,
      password: newPassword
    };

    $.ajax({
      url: "/account/resetPassword",
      type: "post",
      data: JSON.stringify(data),
      processData: false,
      contentType: "application/json; charset=utf-8",
      success: function(data) {
        console.log(data);
        if (data.success) {
          alert("Password changed!");
          window.location.href = "/login";
        } else {
          alert("Failed to reset password: " + data.message);
          window.location.href = "/reset";
        }
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }
}

function logout() {
  $.ajax({
    url: "/account/logout",
    type: "post",
    processData: false,
    contentType: "application/json; charset=utf-8",
    success: function(data) {
      if (data.success) {
        alert("Logged Out!");
        window.location.href = "/";
      } else {
        alert("Failed to logout...");
      }
    },
    error: function(jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}

function forceLower(strInput) {
  strInput.value = strInput.value.toLowerCase();
}

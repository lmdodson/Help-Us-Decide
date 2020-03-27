function submitStep() {
    var password = document.getElementById("onePassword").value;
    var login = document.getElementById("login").value;

    var data = {
        password: password,
        login: login
    };

    console.log(data);

    $.ajax({
        url: "/check",
        type: "post",
        data: JSON.stringify(data),
        processData: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.success) {
                console.log("Success!");
                document.getElementById("continueButton").href = "/" + data.nextPage;
            } else {
                window.location.href = "/" + data.nextPage;
            }
        };
        console.log("After POST");
    });
function submitStep() {
    var password = document.getElementById("onePassword").value;
    var login = document.getElementById("login").value;

    var data = {
        password: password,
        login: login
    };

    $.ajax({
        url: "/check",
        type: "post",
        data: JSON.stringify(data),
        processData: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.success) {
                document.getElementById("continueButton").href = "/" + data.nextPage;
            } else {
                setFailedResponse();
                document.getElementById("onePassword").value = "";
                document.getElementById("onePassword").focus();
                document.getElementById("onePassword").blur();
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            // console.log("Whoops");
        }
    });
}
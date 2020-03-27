function submitStep() {
    var password = document.getElementById("onePassword").value;
    var login = document.getElementById("login").value;

    var data = {
        password: password,
        login: login
    };

    console.log(data);
    console.log("Pre ajax");

    $.ajax({
        url: "/check",
        type: "POST",
        data: JSON.stringify(data),
        processData: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (true) {
                // window.location.href = "/" + data.nextPage;
                window.location.href = "cards";
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log("Boo");
        }
    });
    console.log("After ajax");
}
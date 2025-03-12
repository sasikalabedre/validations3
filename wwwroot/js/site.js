function validateFields() {
    let isValid = true;

    let username = $("#txtusername").val().trim();
    if (username === "") {
        $("#spnusrname").text("Please enter username");
        isValid = false;
    }
    else {
        $("#spnusrname").text("");
    }

    let password = $("#txtpassword").val().trim();
    if (password === "") {
        $("#spnpassword").text("Please enter password");
        isValid = false;
    } else {
        $("#spnpassword").text("");
    }

    return isValid;

}
    $("#btnValidate").click(function () {
        let isFormValid = validateFields();
        if (isFormValid) {
            alert("Form submitted successfully");
        }
    });



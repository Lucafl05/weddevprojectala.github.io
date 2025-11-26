function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let phone = document.getElementById("phone").value;
    let nameText;
    let phoneText;
    let emailText;
    let messageText;

    if (name == "") {
        nameText = "Name input is required"; 
        document.getElementById("namePara").innerHTML = nameText;
        return false;
    }

    if (phone == "") {
        phoneText = "Phone number is required"; 
        document.getElementById("phonePara").innerHTML = phoneText;
        return false;
    }

    let phoneRegex = /^(?:\+353\s?\d{9}|0\d{9})$/;
    if (!phoneRegex.test(phone)) {
        phoneText = "Please enter a valid phone number (No Spaces)";
        document.getElementById("phonePara").innerHTML = phoneText;
        return false;
    }

    if (email == "") {
        emailText = "Email is required"; 
        document.getElementById("emailPara").innerHTML = emailText;
        return false;
    }
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailText = "Please enter a valid email"; 
        document.getElementById("emailPara").innerHTML = emailText;
        return false;
    }

    if (message == "") {
        messageText = "Message is required"; 
        document.getElementById("messagePara").innerHTML = messageText;
        return false;
    }

    document.getElementById("success").innerHTML = "Successful submission";

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";


    return false;
}

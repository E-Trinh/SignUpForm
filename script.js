function checkPass() {
    const passInput = document.querySelectorAll(".pass");
    const passMessage = document.querySelector(".passwordMessage");
    if (passInput[0].value == passInput[1].value && passInput[0].value != undefined && passInput[1].value != undefined) {
        passMessage.textContent = " ";
    } else {
        passMessage.textContent = "Passwords do not match";
    }
}
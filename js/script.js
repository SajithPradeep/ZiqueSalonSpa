
function whatsappToggle() {
    var displayType = document.getElementById("whatsapp").style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById("whatsapp").style.display = "flex";
    }
    else {
       document.getElementById("whatsapp").style.display = "none"
    }
}
function triggerOverlay() {
    var displayType = document.getElementById("google-form").style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById("google-form").style.display = "flex";
    }
    else {
       document.getElementById("google-form").style.display = "none"
    }
}
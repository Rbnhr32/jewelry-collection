function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}

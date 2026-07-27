function validateForm() {
    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var comments = document.getElementById("comments").value.trim();

    if (name === "" || email === "" || comments === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
function navigateToSection(sectionId) {
    if (sectionId) {
        var targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
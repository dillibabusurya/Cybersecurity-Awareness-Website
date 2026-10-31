
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (password.length === 0) {
        result.textContent = "Please enter a sample password.";
    } else if (score <= 2) {
        result.textContent = "Weak Password";
        result.style.color = "red";
    } else if (score <= 4) {
        result.textContent = "Medium Password";
        result.style.color = "orange";
    } else {
        result.textContent = "Strong Password!";
        result.style.color = "lightgreen";
    }
}

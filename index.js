const button = document.getElementById('surprise');

button.addEventListener("click", () => {
    const username = prompt("Username: ");
    if (username === "dindacantik") {
        const password = prompt("Password");
        if (password === "dindaimut") {
            document.location.href = "./video.html";
        } else {
            alert("hayo ngapain disini");
        }
    } else {
        alert("hayo siapa kamu");
    }
});
function toggleSenha () {
    let input = document.getElementById("senha")
    if (input.type === "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
}

function validarLogin() {
    var login = document.getElementById("login").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefoneRegex = /^\d{10,11}$/;

    if (emailRegex.test(login) || telefoneRegex.test(login)) {
        alert("Login válido!");
    } else {
        alert("Digite um e-mail ou telefone válido!");
    }
}
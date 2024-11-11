// Cadastro
document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const confirmEmail = document.getElementById("confirmEmail").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const errorMessage = document.getElementById("cadastroError");

            if (username.length < 3) {
                errorMessage.textContent = "O nome de usuário deve ter pelo menos 3 caracteres.";
            } else if (email !== confirmEmail) {
                errorMessage.textContent = "Os emails não coincidem.";
            } else if (password.length < 6) {
                errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
            } else if (password !== confirmPassword) {
                errorMessage.textContent = "As senhas não coincidem.";
            } else {
                errorMessage.textContent = "";
                alert("Cadastro realizado com sucesso!");
                window.location.href = "login.html";
            }
        });
    }
});

// Login
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("loginError");

            // Exemplo de credenciais: user e password
            if (username !== "user" || password !== "password") {
                errorMessage.textContent = "Nome de usuário ou senha incorretos.";
            } else {
                errorMessage.textContent = "";
                window.location.href = "jogo.html";
            }
        });
    }
});

// Função para criar nuvens aleatórias
function createCloud() {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");
    // Posições e duração aleatórias
    cloud.style.setProperty("--random-x", Math.random());
    cloud.style.setProperty("--random-duration", Math.random());
    document.getElementById("clouds").appendChild(cloud);
}

// Criar múltiplas nuvens
setInterval(createCloud, 2000); // Adiciona uma nuvem a cada 2 segundos

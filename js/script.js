// ========================================
// WORLD OF SWITCH - JAVASCRIPT
// ========================================


// ========================================
// MODO ESCURO
// ========================================

const darkModeButton = document.getElementById("darkMode");

if (darkModeButton) {

    // Verifica se o usuário já tinha escolhido o modo escuro
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "☀️";
    }

    darkModeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("darkMode", "enabled");

            darkModeButton.textContent = "☀️";

        } else {

            localStorage.setItem("darkMode", "disabled");

            darkModeButton.textContent = "🌙";
        }

    });
}


// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const voltarTopo = document.getElementById("voltarTopo");

if (voltarTopo) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            voltarTopo.classList.add("show");

        } else {

            voltarTopo.classList.remove("show");

        }

    });


    voltarTopo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ========================================
// VALIDAÇÃO DO FORMULÁRIO
// ========================================

const formContato = document.getElementById("formContato");

if (formContato) {

    formContato.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const mensagemForm = document.getElementById("mensagemForm");


        // Verificar campos vazios

        if (nome === "" || email === "" || mensagem === "") {

            mensagemForm.textContent =
                "⚠️ Preencha todos os campos.";

            mensagemForm.style.color = "#e60012";

            return;
        }


        // Verificar e-mail

        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {

            mensagemForm.textContent =
                "⚠️ Digite um e-mail válido.";

            mensagemForm.style.color = "#e60012";

            return;
        }


        // Sucesso

        mensagemForm.textContent =
            "✅ Mensagem enviada com sucesso!";

        mensagemForm.style.color = "#008000";


        // Limpar formulário

        formContato.reset();

    });

}
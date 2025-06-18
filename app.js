function enviarResposta(resposta) {
    const dados = {
        nome: document.getElementById("nome").textContent,
        telefone: document.getElementById("telefone").textContent,
        profissional: document.getElementById("profissional").textContent,
        data: document.getElementById("data").textContent,
        hora: document.getElementById("hora").textContent,
        resposta: resposta
    };

    fetch("https://script.google.com/macros/s/AKfycbwJ9LUq57fpnI61ULSCl3T0Qd-JfAeQhcc50yMdk6m0uLH3iJtc5wMM0JPdyhGPAJP3/exec", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => alert("Resposta registrada com sucesso!"))
    .catch(() => alert("Erro ao enviar resposta."));
}
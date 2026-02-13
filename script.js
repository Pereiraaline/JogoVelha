const celulas = document.querySelectorAll(".celula");
const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

let vezDoX = true;

document.getElementById("botaoReiniciar").addEventListener("click", iniciarJogo);

function iniciarJogo() {
    celulas.forEach(celula => {
        celula.textContent = "";
        celula.addEventListener("click", tratrarClick, { once: true })
    })
}

function tratrarClick(evento) {
    evento.target.textContent = vezDoX ? "X" : "O";

    if (verificarVitoriaJogo()) {
        setTimeout(() => {
            alert(`Jogador ${vezDoX ? "X" : "O"} venceu!`);
        }, 100);
        return;
    }

    if (verificarEmpate()) {
        setTimeout(() => {
            alert("Empate!!");
        }, 100);
        return;
    }

    vezDoX = !vezDoX
}

function verificarVitoriaJogo() {
    return combinacoesVitoria.some(combinacao => {
        const [a, b, c] = combinacao;

        return (
            celulas[a].textContent &&
            celulas[a].textContent === celulas[b].textContent &&
            celulas[a].textContent === celulas[c].textContent
        );
    });
}

function verificarEmpate() {
    return [...celulas].every(celula => celula.textContent !== "");
}

iniciarJogo();
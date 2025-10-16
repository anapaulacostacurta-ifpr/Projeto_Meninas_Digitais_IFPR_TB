// 1. Dados Iniciais: Lista de Vagas/Alunos (Ajuste o número de vagas conforme sua turma)
const vagasDaTurma = 40;

// 2. Simulação de Dados do Formulário F-01 (Normalmente viria de um banco de dados/API)
// Array de objetos simulando as respostas do Google Forms
const dadosForms = [
    { vaga: 1, checkin: true },
    { vaga: 2, checkin: true },
    { vaga: 3, checkin: false }, // Simulação: Aluno não marcou o 'Confirmo' no Forms
    { vaga: 5, checkin: false },
    { vaga: 6, checkin: false },
    { vaga: 7, checkin: false },
    { vaga: 8, checkin: false },
    { vaga: 9, checkin: false },
    { vaga: 10, checkin: false },
    { vaga: 11, checkin: false },
    { vaga: 12, checkin: false },
    { vaga: 13, checkin: false },
    { vaga: 14, checkin: false },
    { vaga: 15, checkin: false },
    { vaga: 16, checkin: false },
    { vaga: 17, checkin: false },
    { vaga: 18, checkin: false },
    { vaga: 19, checkin: false },
    { vaga: 20, checkin: false },
    { vaga: 22, checkin: false },
    { vaga: 23, checkin: false },
    { vaga: 24, checkin: false },
    { vaga: 25, checkin: false },
    { vaga: 26, checkin: false },
    { vaga: 27, checkin: false },
    { vaga: 28, checkin: false },
    { vaga: 29, checkin: false },
    { vaga: 30, checkin: false },
    { vaga: 31, checkin: false },
    { vaga: 32, checkin: false },
    { vaga: 33, checkin: false },
    { vaga: 34, checkin: false },
    { vaga: 35, checkin: false },
    { vaga: 36, checkin: false },
    { vaga: 37, checkin: false },
    { vaga: 38, checkin: false },
    { vaga: 39, checkin: false },
    { vaga: 40, checkin: false }
];

// Função Principal: Cria o Layout e Atualiza o Status
function criarEstacionamentoDigital() {
    const container = document.getElementById('estacionamento-digital');
    container.innerHTML = ''; // Limpa o container

    for (let i = 1; i <= vagasDaTurma; i++) {
        const vagaElemento = document.createElement('div');
        vagaElemento.classList.add('vaga');
        vagaElemento.id = `vaga-${i}`;

        // Conteúdo da Vaga
        vagaElemento.innerHTML = `
            <div class="vaga-numero">VAGA ${i.toString().padStart(2, '0')}</div>
            <div class="vaga-nome">LIVRE</div>
        `;

        container.appendChild(vagaElemento);
    }
}

// Função para Simular a Leitura dos Formulários e Atualizar
function checkin() {
    // 1. Resetar todas as vagas para LIVRE
    criarEstacionamentoDigital();
    
    // 2. Processar os dados do formulário
    dadosFormsSimulados.forEach(aluno => {
        const vagaId = `vaga-${aluno.vaga}`;
        const vagaElemento = document.getElementById(vagaId);

        if (vagaElemento) {
            
            // 3. Aplica o estilo de status
            if (aluno.checkin) {
                // Celular estacionado E formulário preenchido corretamente
                vagaElemento.classList.add('ocupada-ok');
            } else {
                // Celular estacionado MAS formulário não preenchido/inválido (ALERTA!)
                vagaElemento.classList.add('ocupada-alerta');
            }
        }
    });
}

// Inicializa o layout (Vagas LIVRES)
document.addEventListener('DOMContentLoaded', criarEstacionamentoDigital);
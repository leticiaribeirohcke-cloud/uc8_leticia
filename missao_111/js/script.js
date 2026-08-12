// Pegando os elementos pelo Id
const btnGravador = document.getElementById('btn-gravador');
const statusGravacao = document.getElementById('status-gravacao');

// Evento de mouse: mousedown
btnGravador.addEventListener('mousedown', function() {
    btnGravador.style.backgroundColor = '#e74c3c';
    btnGravador.textContent = '🔴 Gravando... Não solte!';
    statusGravacao.textContent = 'Status: Capturando áudio...';
});

// Evento de mouse: mouseup
btnGravador.addEventListener('mouseup', function() {
    btnGravador.style.backgroundColor = '#3498db';
    btnGravador.textContent = 'Clique e Segure para Gravar';
    statusGravacao.textContent = 'Status: Gravação concluída e enviada!';
});
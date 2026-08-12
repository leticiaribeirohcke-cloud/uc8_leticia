// Pegando elementos pelo Id
const btnGravador = document.getElementById('btn-gravador');
const statusGravacao = document.getElementById('status-gravacao');

// Evento de touch: touchstart
btnGravador.addEventListener('touchstart', function() {
    btnGravador.style.backgroundColor = '#e74c3c';
    btnGravador.textContent = '🔴 Gravando... Não solte!'
    statusGravacao.textContent = 'Status: Capturando áudio'
});

// Evento de touch: touchend
btnGravador.addEventListener('touchend', function(){
    btnGravador.style.backgroundColor = '#3498db'
    btnGravador.textContent = 'Clique e Segure para Gravar';
    statusGravacao.textContent = 'Gravação concluída e enviada!';
});
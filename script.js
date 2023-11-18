// Seleciona os elementos do relógio no DOM
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Define um intervalo para chamar a função de atualização do relógio a cada segundo
const relogio = setInterval(atualizarRelogio, 1000);

// Função para atualizar o relógio
function atualizarRelogio() {
  // Obtém a data e hora atual
  let dateToday = new Date();
  let hora = dateToday.getHours();
  let minuto = dateToday.getMinutes();
  let segundo = dateToday.getSeconds();

  // Adiciona zero à esquerda se a hora, minuto ou segundo for menor que 10
  hora = hora < 10 ? '0' + hora : hora;
  minuto = minuto < 10 ? '0' + minuto : minuto;
  segundo = segundo < 10 ? '0' + segundo : segundo;

  // Seleciona o elemento body no DOM
  const body = document.body;

  // Limpa as classes de momento do dia
  body.classList.remove('morning', 'afternoon', 'evening', 'night');

  // Adiciona a classe correspondente ao momento do dia atual
  if (hora >= 6 && hora < 12) {
    // Manhã
    body.classList.add('morning');
  } else if (hora >= 12 && hora < 18) {
    // Tarde
    body.classList.add('afternoon');
  } else if (hora >= 18 && hora <= 24) {
    // Noite
    body.classList.add('evening');
  } else {
    // Madrugada (antes das 6)
    body.classList.add('night');
  }

  // Atualiza o conteúdo dos elementos do relógio no DOM
  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;

  // Lógica para alterar o plano de fundo com base na hora do dia
  if (hora >= 6 && hora < 12) {
    // Manhã
    body.style.background = 'linear-gradient(120deg, #87CEEB, #00BFFF)';
  } else if (hora >= 12 && hora < 18) {
    // Tarde
    body.style.background = 'linear-gradient(120deg, #FFD700, #FF6347)';
  } else if (hora >= 18 && hora <= 24) {
    // Noite
    body.style.background = 'linear-gradient(120deg, #000000, #000040)';
  } else {
    // Madrugada (antes das 6)
    body.style.background = 'linear-gradient(120deg, #000000, #000000)';
  }
}

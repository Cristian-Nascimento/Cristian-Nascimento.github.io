# Relógio Digital Dinâmico

Projeto de relógio digital interativo que ajusta dinamicamente as cores com base no horário do dia.

## Estrutura de Arquivos

### HTML (index.html)

Estrutura HTML básica para o relógio digital.

### CSS (style.css)

Estilos para o relógio e suas divisões, com ajuste de cor dinâmica para diferentes momentos do dia.

```css
/* Estilo para o relógio durante a manhã */
body.morning .relogio div {
  color: #000000;
  background-color: rgba(244, 215, 160, 0.827); /* Tom de bege para a manhã */
}

/* Estilo para o relógio durante a tarde */
body.afternoon .relogio div {
  background-color: rgba(255, 160, 122, 0.7); /* Salmão para a tarde */
}

/* Estilo para o relógio durante a noite */
body.evening .relogio div {
  background-color: rgba(4, 4, 104, 0.7); /* Azul escuro para a noite */
  box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.9);
}

/* Estilo para o relógio durante a madrugada */
body.night .relogio div {
  background-color: rgba(0, 0, 0, 0.7); /* Azul escuro para a noite */
  box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.9);
}

/* Estilo para os spans dentro do relógio */
.relogio span {
  font-weight: bolder;
  font-size: 60px;
}

/* Estilo para os spans de tempo dentro do relógio */
.relogio span.tempo{
  font-size: 11px;
}

/* Estilo para a marca d'água */
.marca-dagua {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5); /* Cor e opacidade da marca d'água */
}
```

### JavaScript (script.js)

Lógica para atualização contínua do relógio e ajuste dinâmico de cores com base no horário atual.

```javascript
// Seleção de elementos do relógio no DOM
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Atualização do relógio a cada segundo
const relogio = setInterval(atualizarRelogio, 1000);

// Função para atualizar o relógio
function atualizarRelogio() {
  // Obtém a hora atual
  let dateToday = new Date();
  let hora = dateToday.getHours();
  let minuto = dateToday.getMinutes();
  let segundo = dateToday.getSeconds();

  // Adiciona zero à esquerda se a hora, minuto ou segundo for menor que 10

  // Lógica para alterar a classe do body com base no momento do dia

  // Atualiza o conteúdo dos elementos do relógio no DOM

  // Lógica para alterar o plano de fundo com base na hora do dia
}

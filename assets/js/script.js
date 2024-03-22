function calcular() {
  let numero1 = Number( document.getElementById('numero-um').value);
  let numero2 = Number(document.getElementById('numero-dois').value);
  let total = 0; 

  if (document.getElementById('opcao1').checked) {
    total = numero1 + numero2;
  } else if (document.getElementById('opcao2').checked) {
    total = numero1 - numero2;
  } else if (document.getElementById('opcao3').checked) {
    total = numero1 * numero2;
  }  else {
    total = numero1 / numero2;
  }
  document.getElementById('resultado').innerHTML = 'Resultado: ' + String(total);
}
import cipher from './cipher.js';

document.getElementById("button-encode").addEventListener("click", function () {
  const text = document.getElementById("letter").value
  const offset = document.getElementById("deslocamento").value;
  const resultado = cipher.encode(offset, text)
  console.log(resultado)
  document.getElementById("codedletter").innerHTML = resultado
})
document.getElementById("button-decode").addEventListener("click", function () {
  const text = document.getElementById("codedletter").value
  const offset = document.getElementById("deslocamento").value
  const decmsg = cipher.decode(offset, text)
  console.log(decmsg)
  document.getElementById("decodedletter").innerHTML = decmsg;
})

console.log(cipher)
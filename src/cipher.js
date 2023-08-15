const cipher = { encode, decode };

function encode(offset, text) {
  if (typeof Number(offset) !== 'number') {
    throw new TypeError("Deslocamento precisa ser um número")
  }
  if (typeof text !== 'string') {
    throw new TypeError("Texto precisa ser uma string")
  }
  let mensagemfinal = ''
  for (let i = 0; i < text.length; i++) {
    const charcode = text.charCodeAt(i)
    const charcodenewletter = ((charcode - 65 + Number(offset)) % 26) + 65;
    const mensagem = String.fromCharCode(charcodenewletter);
    mensagemfinal = mensagemfinal + mensagem
    console.log(mensagem)
  }

  return mensagemfinal;
}

function decode(offset, text) {
  if (typeof Number(offset) !== 'number') {
    throw new TypeError("Deslocamento precisa ser um número")
  }
  if (typeof text !== 'string') {
    throw new TypeError("Texto precisa ser uma string")
  }
  let mensagemfinal = ''
  for (let i = 0; i < text.length; i++) {
    const charcode = text.charCodeAt(i)
    const charcodenewletter = ((charcode + 65 - Number(offset)) % 26) + 65;
    const mensagemDec = String.fromCharCode(charcodenewletter);
    mensagemfinal = mensagemfinal + mensagemDec
    console.log(mensagemDec)

  }
  return mensagemfinal
}

export default cipher;

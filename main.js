
const message = document.querySelector('#message')
const decryptArea = document.querySelector('.decrypt-area')

const btnCripto = document.querySelector('.btn--cripto')
const btnDescripto = document.querySelector('.btn--descripto')
const btnCopy = document.querySelector('.btn-copy')

/* Encrypts a given text using a simple hexadecimal encoding. */
function encrypt(text) {
  let cryptText = ''
  for (i=0; i < text.length; i++) {
    let char = text[i]
    let charCode = char.codePointAt(0)
    let stringCode = charCode.toString(16).padStart(2,0)
    cryptText += stringCode

    if (char === ' ') cryptText += ' '
  }
  return cryptText
}

/* Decrypts a given hexadecimal encoded text using a simple hexadecimal decoding. */
function decrypt(text) {
  const newText = text.replace(/\s/g, '')
  let decryptText = ''
  for (i=0; i < newText.length; i+=2) {
    let hexPair = newText.slice(i, i+2)
    let decimalValue = parseInt(hexPair, 16)
    decryptText += String.fromCharCode(decimalValue);
  }
  return decryptText
}

/* Encrypts the input text and updates the decryptArea with the encrypted text. */
btnCripto.addEventListener('click', (e) => {
  e.preventDefault()
  const text = document.getElementById('text').value
  let currentClass = message.classList.contains('show__message')

  if (text === '') {
    alert('Por favor, insira algum texto no campo.');
    return;
  }

  let enc = encrypt(text, key)

  if(currentClass){
    message.classList.remove('show__message')
    message.classList.add('hidden__message')
  }

  decryptArea.innerHTML = enc
  text.value = ' '
  document.getElementById('text').value = ''

  
  changeBtnCopy('Copiar')
})

/* Decrypts the input text and updates the decryptArea with the decrypted text. */
btnDescripto.addEventListener('click', (e) => {
  e.preventDefault()
  const text = document.getElementById('text').value
  let dec = decrypt(text, key)

  if (text === '') {
    alert('Por favor, insira algum texto no campo.');
    return;
  }

  decryptArea.innerHTML = dec
  document.getElementById('text').value = ''
  changeBtnCopy('Copiar')
})

/* Adds a click event listener to the copy button, which copies the decrypted text to the clipboard. */
btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(decryptArea.textContent)
  changeBtnCopy('Copiado')
})

/* This function changes the text and style of the copy button based on the given parameter.*/
function changeBtnCopy(btnText) {

  if (btnText === 'Copiado') {
    btnCopy.textContent =  'Copiado'
    btnCopy.style.backgroundColor = '#495057'
    btnCopy.style.color = '#ffffff'
  } else {
    btnCopy.style.display = 'block'
    btnCopy.textContent = 'Copiar'
    btnCopy.style.backgroundColor = '#ffffff'
    btnCopy.style.color = '#0A3871'
  }
}

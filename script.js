document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('texto-inserido').value;
    const encryptedText = encryptText(inputText);
    toggleResultDisplay(encryptedText);
    displayOutput(encryptedText);
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('texto-inserido').value;
    const decryptedText = decryptText(inputText);
    toggleResultDisplay(decryptedText);
    displayOutput(decryptedText);
});

document.getElementById('botao-copiar').addEventListener('click', function() {
    const outputText = document.getElementById('texto-trocar').innerText;
    copyToClipboard(outputText);
    alert('Text copied to clipboard!');
});

function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function displayOutput(text) {
    const outputElement = document.getElementById('texto-trocar');
    outputElement.innerText = text;
}

function toggleResultDisplay(text) {
    const falsoSection = document.querySelector('.falso');
    const verdadeiroSection = document.querySelector('.verdadeiro');
    const copyButton = document.getElementById('botao-copiar');
    
    if (text.trim() !== "") {
        // Exibir a área verdadeiro e ocultar a área falso
        falsoSection.style.display = 'none';
        verdadeiroSection.style.display = 'flex';
        copyButton.style.display = 'inline-block';
    } else {
        // Exibir a área falso e ocultar a área verdadeiro
        falsoSection.style.display = 'block';
        verdadeiroSection.style.display = 'none';
        copyButton.style.display = 'none';
    }
}
function copyToClipboard(text) {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
}
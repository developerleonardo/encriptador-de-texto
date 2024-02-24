const messageToEncrypt = document.getElementById("message");
const encryptButton = document.getElementById("encrypt-button");
const desencryptButton = document.getElementById("desencrypt-button");
const divToHide = document.querySelector(".resultado-container");
const encryptedMessageContainer = document.querySelector(".texto-encriptado-container");
const encryptedText = document.getElementById("encrypted-text");

const cerrar = (divToHide) => {
    divToHide.style.display = "none";
    encryptedMessageContainer.style.display = "flex"
};

const encryptMessage = (messageToEncrypt) => {
    inputMessage = messageToEncrypt.value;
    const encryptMessage = inputMessage.split("").map(vowel => {
        if (vowel === "a") return vowel.replace("a", "ai");
        if (vowel === "e") return vowel.replace("e", "enter");
        if (vowel === "i") return vowel.replace("i", "imes");
        if (vowel === "o") return vowel.replace("o", "ober");
        if (vowel === "u") return vowel.replace("u", "ufat");
        return vowel;
    })
    const encryptedMessage = encryptMessage.join("");

    encryptedText.innerHTML = encryptedMessage;
}

const desencryptMessage = (messageToDencrypt) => {
    inputMessage = messageToDencrypt.value;
    const encryptMessage = inputMessage.split(" ").map(vowel => {
        const encryptedWords = {
            "ai": "a",
            "enter": "e",
            "imes": "i",
            "ober": "o",
            "ufat": "u"
        };
        for (const encryptedWord in encryptedWords) {
            vowel = vowel.split(encryptedWord).join(encryptedWords[encryptedWord])
        }
        return vowel + " ";
    });
    const desencryptedMessage = encryptMessage.join("");
    encryptedText.innerHTML = desencryptedMessage;
}

encryptButton.addEventListener("click", () => {
    cerrar(divToHide);
    encryptMessage(messageToEncrypt);
})

desencryptButton.addEventListener("click", () => {
    cerrar(divToHide);
    desencryptMessage(messageToEncrypt);
})

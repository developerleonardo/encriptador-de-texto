const messageToEncrypt = document.getElementById("message");
const encryptButton = document.getElementById("encrypt-button");
const desencryptButton = document.getElementById("desencrypt-button");
const divToHide = document.querySelector(".resultado-container");
const encryptedMessageContainer = document.querySelector(".texto-encriptado-container");
const encryptedText = document.getElementById("encrypted-text");
const alertMessage = document.getElementById("alert-message");
const copyText = document.getElementById("copy-text")
const copyButton = document.getElementById("copy-button");

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
};

const validateInputToEncrypt = (messageToEncrypt) => {
    const inputMessage = messageToEncrypt.value;
    const regex = /^[a-z\s]+$/;
    if(regex.test(inputMessage)) {
        encryptMessage(messageToEncrypt);
        alertMessage.classList.remove("red-alert");
    } else {
        alertMessage.classList.add("red-alert");
    }
};

const validateInputToDesencrypt = (messageToEncrypt) => {
    const inputMessage = messageToEncrypt.value;
    const regex = /^[a-z\s]+$/;
    if(regex.test(inputMessage)) {
        desencryptMessage(messageToEncrypt);
        alertMessage.classList.remove("red-alert");
    } else {
        alertMessage.classList.add("red-alert");
    }
};

copyResult = () => {
    encryptedText.select();
    document.execCommand("copy");
}

encryptButton.addEventListener("click", () => {
    cerrar(divToHide);
    validateInputToEncrypt(messageToEncrypt);
});

desencryptButton.addEventListener("click", () => {
    cerrar(divToHide);
    validateInputToDesencrypt(messageToEncrypt);
});

copyButton.addEventListener("click", () => {
    copyResult();
})
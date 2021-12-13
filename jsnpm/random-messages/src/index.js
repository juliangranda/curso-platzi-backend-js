const messages = [
    "julian",
    "oscar",
    "ana",
    "nicolas",
    "diego",
    "yesica",
    "laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};
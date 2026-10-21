// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});
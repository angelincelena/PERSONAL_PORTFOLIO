const roles = ["Frontend Developer", "AI Enthusiast", "Machine Learning Explorer", "Passionate Coder"];
let i = 0, j = 0, currentText = "";
let fullText = "";

function typeEffect() {
    if (i < roles.length) {
        if (j < roles[i].length) {
            currentText += roles[i][j++];
            document.querySelector(".typing-text").textContent = currentText;
            setTimeout(typeEffect, 150); 
        } else {
            currentText += " | "; 
            i++; 
            j = 0;
            setTimeout(typeEffect, 300); 
        }
    }
}

document.addEventListener("DOMContentLoaded", () => typeEffect());


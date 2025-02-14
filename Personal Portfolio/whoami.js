const aboutLines = [
    "🚀 A Frontend Developer who loves crafting beautiful and functional web experiences.",
    "💡 An AI/ML Enthusiast, exploring how technology can make life smarter.",
    "🎨 A Creative Thinker who enjoys UI/UX and design.",
    "📚 Lifelong Learner, currently diving into Web Development, AIML, and Deep Learning.",
    "🛠️ Always exploring new web technologies, frameworks, and tools to stay ahead.",
    "🚀 Passionate about adapting to the latest industry trends and updates.",
    "📢 I strive to keep my skills sharp by learning every time a new update is released.",
    "🎯 My goal? Build intelligent, user-focused applications that stand out!"
];

let aboutIndex = 0;

function showAboutText() {
    if (aboutIndex < aboutLines.length) {
        const aboutList = document.querySelector(".about-me ul");
        const li = document.createElement("li");
        li.textContent = aboutLines[aboutIndex];
        li.classList.add("fade-in"); 
        aboutList.appendChild(li);
        aboutIndex++;
        setTimeout(showAboutText, 1000); 
    } else {
        setTimeout(() => {
            document.querySelector(".about-me ul").innerHTML = "";
            aboutIndex = 0;
            showAboutText();
        }, 2000); 
    }
}

document.addEventListener("DOMContentLoaded", showAboutText);



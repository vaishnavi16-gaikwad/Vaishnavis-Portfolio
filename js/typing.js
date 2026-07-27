// ===== TYPING EFFECT =====

const typingText = document.querySelector(".typing");

const words = [
    "Java Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Spring Boot Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; // pause before next word
    }

    setTimeout(type, typeSpeed);
}

type();
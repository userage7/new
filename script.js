// FSOCIETY TERMINAL EFFECT
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c✧ FSOCIETY TERMINAL ACTIVATED ✧', 'color: #ff0000; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px red;');
    
    // Glitch effect усиление при наведении
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        glitchTitle.addEventListener('mouseenter', () => {
            glitchTitle.style.animation = 'none';
            glitchTitle.offsetHeight;
            glitchTitle.style.animation = 'glitch 0.5s infinite';
        });
        
        glitchTitle.addEventListener('mouseleave', () => {
            glitchTitle.style.animation = 'glitch 3s infinite';
        });
    }
    
    // Анимированные символы на фоне (динамика)
    const matrixBg = document.querySelector('.matrix-bg');
    if (matrixBg) {
        setInterval(() => {
            const symbols = ['F', 'S', '⚡', '⏣', '◈', '✧', '⬩', '▣', '◉', '⎔'];
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            const tempSpan = document.createElement('span');
            tempSpan.textContent = randomSymbol;
            tempSpan.style.position = 'fixed';
            tempSpan.style.left = Math.random() * 100 + '%';
            tempSpan.style.top = Math.random() * 100 + '%';
            tempSpan.style.color = 'rgba(180, 0, 0, 0.15)';
            tempSpan.style.fontSize = Math.floor(Math.random() * 30 + 20) + 'px';
            tempSpan.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            tempSpan.style.zIndex = '-1';
            tempSpan.style.pointerEvents = 'none';
            tempSpan.style.animation = 'fadeOut 5s forwards';
            document.body.appendChild(tempSpan);
            
            setTimeout(() => {
                tempSpan.remove();
            }, 5000);
        }, 800);
    }
    
    // Добавляем стиль для fadeOut
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            0% { opacity: 0.2; transform: scale(1) rotate(0deg); }
            100% { opacity: 0; transform: scale(2) rotate(20deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Кнопки с вибрацией при клике
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (btn.getAttribute('href') === '#') e.preventDefault();
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Приветствие в консоли
    console.log('%c██╗  ██╗ ██████╗ ███████╗ ██████╗ ██████╗ ██╗███████╗████████╗██╗   ██╗', 'color: #b30000');
    console.log('%c██║  ██║██╔═══██╗██╔════╝██╔═══██╗██╔══██╗██║██╔════╝╚══██╔══╝╚██╗ ██╔╝', 'color: #cc3333');
    console.log('%c███████║██║   ██║███████╗██║   ██║██████╔╝██║█████╗     ██║    ╚████╔╝ ', 'color: #e06666');
    console.log('%c██╔══██║██║   ██║╚════██║██║   ██║██╔══██╗██║██╔══╝     ██║     ╚██╔╝  ', 'color: #ff8080');
    console.log('%c██║  ██║╚██████╔╝███████║╚██████╔╝██║  ██║██║██║        ██║      ██║   ', 'color: #ff9999');
    console.log('%c╚═╝  ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝        ╚═╝      ╚═╝   ', 'color: #ffb3b3');
    console.log('%c                   ✧ FSOCIETY DARK WEB EDITION ✧                      ', 'color: #ff4d4d; font-size: 14px; text-shadow: 0 0 5px red;');
});

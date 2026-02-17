let currentRotation = 0;

function spin() {
    const wheel = document.getElementById('wheel');
    const extraDegrees = Math.floor(Math.random() * 360) + 1800; // Мінімум 5 обертів
    currentRotation += extraDegrees;
    
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Повідомляємо Telegram про результат після зупинки
    setTimeout(() => {
        const result = (currentRotation % 360 > 180) ? "Win" : "Lose";
        Telegram.WebApp.showAlert("Результат: " + result);
    }, 4000);
}

Telegram.WebApp.ready();

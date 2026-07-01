// Lista de imagens de fundo (pasta Wallpaper).
// Ao adicionar novas imagens na pasta, inclua-as aqui para entrarem no ciclo das setas.
const wallpapers = [
    './Wallpaper/Gato.png',
    './Wallpaper/Lagoa.jpg',
    './Wallpaper/FakeWindowsXp.png',
    './Wallpaper/FakeDiscord.png',
    './Wallpaper/FakeExplorer.png',
    './Wallpaper/FakeInstagram.png',
    './Wallpaper/FakeReddit.png',
    './Wallpaper/FakeVscode.png',
    './Wallpaper/FakeWord.png',
    './Wallpaper/FakeX.png',
    './Wallpaper/FakeYoutube.png',
];

// Wallpaper inicial e índice atual dentro da lista acima
let defaultWallpaper = './Wallpaper/Gato.png';
let currentWallpaperIndex = Math.max(0, wallpapers.indexOf(defaultWallpaper));

function applyWallpaper(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Troca o wallpaper avançando (direction = 1) ou voltando (direction = -1) na lista
function changeWallpaper(direction) {
    currentWallpaperIndex =
        (currentWallpaperIndex + direction + wallpapers.length) % wallpapers.length;
    applyWallpaper(wallpapers[currentWallpaperIndex]);
}

window.setAppMode = function(isApp, imageUrl) {
    if (isApp) {
        document.body.classList.add('app-mode');
    } else {
        document.body.classList.remove('app-mode');
    }
    // Só altera a imagem se uma for informada; caso contrário mantém a atual
    if (imageUrl) applyWallpaper(imageUrl);
};

window.toggleAppMode = function(imageUrl) {
    const isApp = !document.body.classList.contains('app-mode');
    window.setAppMode(isApp, imageUrl);
};

function updateDateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    if (!timeElement || !dateElement) return;

    const now = new Date();

    // Time in American format (e.g., 10:14 AM)
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    timeElement.textContent = `${hours}:${minutes} ${ampm}`;

    // Date in American format (e.g., 6/29/2026)
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();

    dateElement.textContent = `${month}/${day}/${year}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Aplica o wallpaper inicial para manter o índice em sincronia com o que é exibido
    applyWallpaper(wallpapers[currentWallpaperIndex]);

    // Botão da porta alterna entre Modo Desktop e Modo App
    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            window.toggleAppMode();
        });
    }

    const taskbarIcons = document.querySelectorAll('.taskbar-icon:not(#start-button)');
    taskbarIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('active-app')) {
                icon.classList.remove('active-app');
                icon.classList.add('open-app');
            } else if (icon.classList.contains('open-app')) {
                icon.classList.remove('open-app');
            } else {
                icon.classList.add('open-app');
            }
        });
    });

    // Setas do teclado trocam a imagem de fundo (ciclando pela pasta Wallpaper)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            event.preventDefault();
            changeWallpaper(1);
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            event.preventDefault();
            changeWallpaper(-1);
        }
    });

    // Initialize and set interval for date and time
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

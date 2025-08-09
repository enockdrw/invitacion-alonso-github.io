let isPlaying = false;

// Iniciar música automáticamente
function initAutoMusic() {
    setTimeout(() => {
        if (!isPlaying) {
            toggleMusic();
        }
    }, 2000); // Espera 2 segundos después de cargar
}

// Control de música para reproducir/pausar archivo mp3
function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const control = document.getElementById('musicControl');
    if (isPlaying) {
        audio.pause();
        control.innerHTML = '🎵';
        control.classList.remove('playing');
        isPlaying = false;
    } else {
        audio.play();
        control.innerHTML = '🔊';
        control.classList.add('playing');
        isPlaying = true;
    }
}
        
        // Crear partículas dinámicas
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particlesContainer.appendChild(particle);
            }
        }
        
        // Confirmar asistencia por WhatsApp
        function confirmarAsistencia() {
            const mensaje = encodeURIComponent('¡Hola! Confirmo mi asistencia al cumpleaños de Alonso el 23 de agosto de 10:00 am a 1:00 pm en CasaPlay Valle Grande. ¡Llevaré mis calcetas antideslizantes! Nos vemos ahí! 🎉🧦');
            const whatsappURL = `https://wa.me/56935299591?text=${mensaje}`;
            
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Mostrar pantalla de agradecimiento después de un breve delay
            setTimeout(() => {
                document.getElementById('thankYouScreen').style.display = 'flex';
            }, 1000);
        }
        
        // Ver ubicación en Google Maps
        function verUbicacion() {
            const direccion = encodeURIComponent('Santa Teresita de los Andes 372, Valle Grande, Chile');
            const mapsURL = `https://www.google.com/maps/search/?api=1&query=${direccion}`;
            window.open(mapsURL, '_blank');
        }
        
        // Cerrar pantalla de agradecimiento
        function closeThanks() {
            document.getElementById('thankYouScreen').style.display = 'none';
        }
        
        // Sonido del creeper (simulado con vibración en móviles)
        function playSound() {
            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
            }
            
            // Crear efecto visual
            const creeper = document.querySelector('.creeper');
            creeper.style.background = '#FFD700';
            setTimeout(() => {
                creeper.style.background = '#90EE90';
            }, 200);
        }
        
        // Efectos de hover en bloques
        document.querySelectorAll('.block-decoration').forEach(block => {
            block.addEventListener('click', () => {
                block.style.transform = 'scale(1.3) rotate(360deg)';
                setTimeout(() => {
                    block.style.transform = 'scale(1)';
                }, 600);
            });
        });
        
        // Inicializar partículas
        createParticles();
        
        // Cerrar pantalla de agradecimiento al hacer clic fuera
        document.getElementById('thankYouScreen').addEventListener('click', (e) => {
            if (e.target.id === 'thankYouScreen') {
                closeThanks();
            }
        });
        
        // Animación de entrada y música automática
        window.addEventListener('load', () => {
            document.querySelector('.invitation-card').style.animation = 'fadeIn 1s ease';
            // Iniciar música automáticamente después de cargar
            initAutoMusic();
        });
        
        // Intentar iniciar música con primera interacción del usuario (fallback)
        document.addEventListener('click', () => {
            if (!isPlaying) {
                toggleMusic();
            }
        }, { once: true });
        
        // También intentar con touch para móviles
        document.addEventListener('touchstart', () => {
            if (!isPlaying) {
                toggleMusic();
            }
        }, { once: true });
    
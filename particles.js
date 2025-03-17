// Crear partículas cuadradas con bordes redondeados
const container = document.getElementById('particles-container');
const TOTAL_PARTICLES = 30;
const COLORS = ['#a09cff', '#ffabce', '#90c4ff', '#cab8ff', '#ffc9e3'];

for (let i = 0; i < TOTAL_PARTICLES; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Tamaño aleatorio entre 15px y 40px
    const size = Math.random() * 25 + 15;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Posición aleatoria
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Color aleatorio de la paleta más clara
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    particle.style.background = COLORS[colorIndex];
    
    // Diferentes profundidades (z-index y escala)
    const depth = Math.random() * 3;
    particle.style.transform = `translateZ(${depth * -100}px) scale(${1 - depth * 0.2})`;
    particle.style.opacity = 0.2 + (depth * 0.2);
    
    // Movimiento muy ligero
    const duration = Math.random() * 60 + 40; // movimiento muy lento
    const delay = Math.random() * 10;
    
    // Define un movimiento muy sutil
    const moveX = Math.random() * 20 - 10; // movimiento horizontal limitado a +-10px
    const moveY = Math.random() * 20 - 10; // movimiento vertical limitado a +-10px
    const rotate = Math.random() * 10 - 5; // rotación ligera
    
    particle.style.animation = `moveParticleSlightly ${duration}s ${delay}s infinite alternate ease-in-out`;
    
    // Estilo de keyframes específico para cada partícula con movimiento sutil
    const keyframes = `
        @keyframes moveParticleSlightly {
            0% {
                transform: translateZ(${depth * -100}px) translate(0, 0) scale(${1 - depth * 0.2}) rotate(0deg);
            }
            100% {
                transform: translateZ(${depth * -100}px) translate(${moveX}px, ${moveY}px) scale(${1 - depth * 0.2}) rotate(${rotate}deg);
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);
    
    container.appendChild(particle);
}

// Efecto 3D en hover
const loginContainer = document.querySelector('.login-container');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const tiltAmount = 10;
    const rotateX = (y - 0.5) * tiltAmount;
    const rotateY = (0.5 - x) * tiltAmount;
    
    loginContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
});

document.addEventListener('mouseleave', () => {
    loginContainer.style.transform = 'perspective(1000px) rotateX(3deg) translateY(0)';
});

// Efecto de notificación
const loginForm = document.getElementById('loginForm');
const notification = document.getElementById('notification');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animación del botón
    const button = document.querySelector('.login-button');
    button.style.transform = 'translateY(3px)';
    button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.2)';
    
    setTimeout(() => {
        button.style.transform = '';
        button.style.boxShadow = '';
        
        // Mostrar notificación
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }, 200);
});

// Links interactivos
const forgotPassword = document.getElementById('forgotPassword');
const signupLink = document.getElementById('signupLink');

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Función de recuperación de contraseña');
});

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Función de registro');
});
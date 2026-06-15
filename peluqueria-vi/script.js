/* ============================================
   Vi Peluquería - Script
   Funcionalidades interactivas
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- MENÚ HAMBURGUESA (Mobile) ---------- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animación del hamburger a X
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    /* ---------- NAVBAR: ACTIVE LINK ON SCROLL ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    /* ---------- NAVBAR: CAMBIAR ESTILO AL SCROLL ---------- */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.12)';
            header.style.background = 'rgba(255,255,255,0.98)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        }
    });

    /* ---------- BACK TO TOP ---------- */
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* ---------- FORMULARIO DE CONTACTO ---------- */
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validación básica
        if (!nombre) {
            showNotification('Por favor, ingresa tu nombre', 'error');
            return;
        }

        if (!email) {
            showNotification('Por favor, ingresa tu correo electrónico', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showNotification('Por favor, ingresa un correo válido', 'error');
            return;
        }

        // Simulación de envío exitoso
        showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    /* ---------- NOTIFICACIÓN PERSONALIZADA ---------- */
    function showNotification(message, type = 'success') {
        // Eliminar notificaciones previas
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;

        // Estilos dinámicos para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            padding: 18px 25px;
            background: ${type === 'success' ? '#4caf50' : '#f44336'};
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 15px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.95rem;
            animation: slideInRight 0.4s ease;
            max-width: 400px;
        `;

        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        `;

        notification.querySelector('.notification-content i').style.cssText = `
            font-size: 1.5rem;
        `;

        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0.8;
            padding: 0;
            line-height: 1;
        `;

        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        document.body.appendChild(notification);

        // Auto-eliminar después de 5 segundos
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.4s ease';
                setTimeout(() => notification.remove(), 400);
            }
        }, 5000);
    }

    /* ---------- AÑADIR KEYFRAMES DINÁMICOS ---------- */
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(120%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(120%); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    /* ---------- ANIMACIONES AL HACER SCROLL (Intersection Observer) ---------- */
    const animateElements = document.querySelectorAll('.servicio-card, .galeria-item, .testimonio-card, .nosotros-content, .horarios-card');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    /* ---------- CONTADOR ANIMADO (PEQUEÑO TOQUE) ---------- */
    // Pequeño efecto: títulos con fade on scroll
    const sectionHeaders = document.querySelectorAll('.section-header');

    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        headerObserver.observe(header);
    });

    console.log('✨ Vi Peluquería - Aplicación cargada con éxito');
});

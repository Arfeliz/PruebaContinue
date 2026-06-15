# Vi Peluquería 💇‍♀️✨

Aplicación web moderna y elegante para la peluquería **Vi**.  
Página 100% frontend (HTML + CSS + JS vanilla).

## 🚀 Demo en vivo

Una vez desplegado en GitHub Pages, la URL será:  
`https://Arfeliz.github.io/peluqueria-vi/`

## 📁 Estructura del proyecto

```
peluqueria-vi/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño responsivo
├── script.js           # Funcionalidades interactivas
├── .gitignore          # Archivos ignorados por Git
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions para deploy automático
└── README.md           # Este archivo
```

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con Flexbox, Grid, animaciones y diseño responsivo
- JavaScript vanilla (ES6+)
- Font Awesome 6 (iconos)
- Google Fonts (Playfair Display + Poppins)
- GitHub Actions (CI/CD automático)

## 📦 Instalación local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Arfeliz/peluqueria-vi.git
   cd peluqueria-vi
   ```

2. Abre `index.html` en tu navegador directamente (no necesita servidor).

## 🌐 Desplegar en GitHub Pages

### Opción 1: Automático con GitHub Actions (recomendado)

1. Sube el proyecto a GitHub:
   ```bash
   git init
   git add .
   git commit -m "🚀 Primer commit - Vi Peluquería"
   git branch -M main
   git remote add origin https://github.com/Arfeliz/peluqueria-vi.git
   git push -u origin main
   ```

2. Ve a tu repositorio en GitHub → **Settings** → **Pages**
3. En "Source" selecciona **GitHub Actions**
4. El workflow `deploy.yml` se ejecutará automáticamente al hacer push a `main`
5. Ve a la pestaña **Actions** para ver el progreso del deploy

### Opción 2: Manual (sin Actions)

1. En GitHub → **Settings** → **Pages**
2. En "Source" selecciona **Deploy from a branch**
3. Branch: `main` / Carpeta: `/ (root)`
4. Guarda y espera unos minutos

## ✨ Funcionalidades

- ✅ Navegación con scroll suave
- ✅ Menú responsive (hamburguesa en móvil)
- ✅ Formulario de contacto con validación
- ✅ Galería con efecto hover
- ✅ Animaciones al hacer scroll
- ✅ Notificaciones personalizadas
- ✅ Botón flotante de WhatsApp
- ✅ Botón "Volver arriba"
- ✅ Totalmente responsive

## 📄 Licencia

Este proyecto es de uso libre. ¡Si te gusta, dale una ⭐!

---
Hecho con ❤️ para **Vi Peluquería**

# Linux Customizer (KDE Edition) 🐧✨

A sleek, minimalist, and highly customizable dock built with **Electron** and designed specifically for the **KDE Plasma** desktop environment. This tool allows you to launch your favorite applications, change wallpapers on the fly, and switch between beautiful "Glassmorphism" themes—all while maintaining a clean and modern aesthetic.

---

## 🚀 Features

-   **Minimalist Glassmorphism UI:** A beautiful, frosted-glass dock with smooth animations and micro-interactions.
-   **KDE Plasma Integration:** Uses native KDE commands (`plasma-apply-wallpaperimage`) for seamless wallpaper changes.
-   **Dynamic Themes:**
    -   **Dark Glass:** Deep, elegant, and easy on the eyes.
    -   **Light Glass:** Crisp, clean, and bright.
    -   **Vivid:** A bold, colorful gradient theme for a pop of personality.
-   **App Launcher:** Quick access to Terminal, Browser, File Manager, Text Editor, System Monitor, and Media Player.
-   **Theme Persistence:** Remembers your chosen theme automatically across restarts.
-   **Custom Cursor & Effects:** Features a specialized interaction cursor and an idle "floating" animation.

---

## 🛠️ Installation

### Prerequisites

Ensure you have the following installed on your system:
-   **Node.js** (v16 or higher)
-   **npm** (Node Package Manager)
-   **KDE Plasma** (Desktop Environment)
-   **Git**

### Step-by-Step Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Montuvlv/Linux-Customizer-KDE.git
    cd Linux-Customizer-KDE
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

---

## 🏃 How to Run

To start the dock, simply run the following command in your terminal:

```bash
npm start
```

*Tip: For a seamless experience, you can add this command to your KDE "Autostart" settings so the dock opens every time you log in!*

---

## 📖 How to Use

-   **Launch Apps:** Click on any app icon to open the corresponding application.
-   **Change Wallpaper:** Click the **Cityscape icon (🏙️)** to choose an image file. The wallpaper will be applied instantly to your KDE desktop.
-   **Switch Themes:** Click the **Half-Moon icon (🌓)** to cycle through the available themes (Dark, Light, Vivid).
-   **Idle Animation:** Notice the subtle floating effect that gives the dock a "live" feel.

---

## 📂 Project Structure

-   `main.js`: The Electron main process handling window configuration and system layering.
-   `preload.js`: Secure bridge for communication between the UI and system commands.
-   `backend/`:
    -   `wallpaper.js`: KDE-specific wallpaper logic.
    -   `dock.js`: Application launching logic.
-   `renderer/`:
    -   `index.html`: The structure of the dock.
    -   `style.css`: All the styling, themes, and animations.
    -   `app.js`: User interface logic and theme persistence.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas for new features or improvements.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

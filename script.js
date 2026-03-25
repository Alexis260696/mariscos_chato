document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    const updateThemeButton = (theme) => {
        if (!themeToggleBtn) return;

        const isDark = theme === "dark";
        themeToggleBtn.textContent = isDark ? "Tema claro" : "Tema oscuro";
        themeToggleBtn.setAttribute("aria-pressed", String(isDark));
    };

    const savedTheme = localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || preferredTheme;

    root.setAttribute("data-theme", initialTheme);
    updateThemeButton(initialTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
            const nextTheme = currentTheme === "dark" ? "light" : "dark";

            root.setAttribute("data-theme", nextTheme);
            localStorage.setItem("theme", nextTheme);
            updateThemeButton(nextTheme);
        });
    }

    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});


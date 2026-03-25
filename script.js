document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const moonIcon = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.742 13.045a8.088 8.088 0 0 1-9.787-9.787A9 9 0 1 0 20.742 13.045Z"/></svg>';
    const sunIcon = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-7a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM5 12a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1Zm12.364-6.95a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707Zm-10.435 10.435a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707Zm11.142 2.12a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM8.343 8.343a1 1 0 0 1-1.414 1.414l-.707-.707A1 1 0 1 1 7.636 7.636l.707.707Z"/></svg>';

    const updateThemeButton = (theme) => {
        if (!themeToggleBtn) return;

        const isDark = theme === "dark";
        themeToggleBtn.innerHTML = isDark ? sunIcon : moonIcon;
        themeToggleBtn.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
        themeToggleBtn.setAttribute("title", isDark ? "Activar tema claro" : "Activar tema oscuro");
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


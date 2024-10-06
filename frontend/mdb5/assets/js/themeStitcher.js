const themeStitcher = document.getElementById("themingSwitcher");
const isSystemThemeSetToDark = window.matchMedia("(prefers-color-scheme: light)").matches;

// set toggler position based on system theme
if (isSystemThemeSetToDark) {
    themeStitcher.checked = true;
}

// add listener to theme toggler
themeStitcher.addEventListener("change", (e) => {
    toggleTheme(e.target.checked);
});

const toggleTheme = (isChecked) => {
    document.documentElement.dataset.mdbTheme = isChecked ? "dark" : "light";
}

// add listener to toggle theme with Shift + D
document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "D") {
        themeStitcher.checked = !themeStitcher.checked;
        toggleTheme(themeStitcher.checked);
    }
});
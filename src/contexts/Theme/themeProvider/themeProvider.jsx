import React, { useEffect, useState } from 'react';
import ThemeContext from '../themeContext';
const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const save = localStorage.getItem("studymate-theme");
        if (save === "studymate-dark") return true;
        else if (save === "studymate") return false;
        else return true;
    });
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme", darkMode ? "studymate-dark" : "studymate"
        );
        localStorage.setItem("studymate-theme", darkMode ? 'studymate-dark' : "studymate")
    }, [darkMode])
    const mode = {
        darkMode,
        setDarkMode
    }
    return (
        <ThemeContext value={mode}>
            {children}
        </ThemeContext>

    );
};
export default ThemeProvider;
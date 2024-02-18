import { ThemeContext } from "@emotion/react";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "vm";

export const ThemeProviderWrapper = (children: ReactNode[]) => {
	const ThemeContext = createContext();
	const [theme, setTheme] = useState("theme01");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") ?? "theme01";
		setTheme(savedTheme);
	}, []);

	const toggleTheme = newTheme => {
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

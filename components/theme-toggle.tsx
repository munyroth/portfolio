"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="w-9 h-9 rounded-lg bg-secondary/50" />;
	}

	return (
		<motion.button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			aria-label="Toggle theme"
		>
			<motion.div
				initial={false}
				animate={{ rotate: theme === "dark" ? 0 : 180 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				{theme === "dark" ? (
					<Moon size={20} className="text-muted-foreground" />
				) : (
					<Sun size={20} className="text-muted-foreground" />
				)}
			</motion.div>
		</motion.button>
	);
}

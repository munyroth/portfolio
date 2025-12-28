"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Work" },
	{ href: "#experience", label: "Experience" },
];

const MotionImage = motion.create(Image);

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Track active section with IntersectionObserver
	useEffect(() => {
		// Include hero and contact sections in tracking
		const sectionIds = [
			...navLinks.map((link) => link.href.replace("#", "")),
			"hero",
			"contact",
		];
		const observers: IntersectionObserver[] = [];

		for (const id of sectionIds) {
			const element = document.getElementById(id);
			if (element) {
				const observer = new IntersectionObserver(
					(entries) => {
						for (const entry of entries) {
							if (entry.isIntersecting) {
								// If hero or contact section is visible, clear nav active state
								if (id === "hero" || id === "contact") {
									setActiveSection("");
								} else {
									setActiveSection(`#${id}`);
								}
							}
						}
					},
					{ rootMargin: "-40% 0px -60% 0px" },
				);
				observer.observe(element);
				observers.push(observer);
			}
		}

		return () => {
			for (const observer of observers) {
				observer.disconnect();
			}
		};
	}, []);

	// Close mobile menu on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsMobileMenuOpen(false);
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, []);

	return (
		<>
			{/* Backdrop for mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="fixed inset-0 bg-background/80 backdrop-blur-xs z-40 md:hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsMobileMenuOpen(false)}
					/>
				)}
			</AnimatePresence>

			<motion.nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "glass backdrop-blur-xs backdrop-saturate-150 py-2 sm:py-3 shadow-lg shadow-background/10"
						: "bg-transparent py-4 sm:py-5"
				}`}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
					{/* Logo & Name */}
					<motion.button
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
							window.location.href = "#";
						}}
						className="relative flex items-center gap-2 sm:gap-3 cursor-pointer group"
						type="button"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<div className="relative">
							<MotionImage
								src="https://avatars.githubusercontent.com/u/71256712?v=4"
								alt="Muny Roth"
								width={44}
								height={44}
								className="rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors w-9 h-9 sm:w-11 sm:h-11"
								whileHover={{ rotate: 5 }}
							/>
							<motion.div
								className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-primary rounded-full border-2 border-background"
								animate={{ scale: [1, 1.2, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
							/>
						</div>
					</motion.button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{/* Nav Links with pill background */}
						<div className="flex items-center gap-1 bg-secondary/50 rounded-full px-1.5 py-1.5">
							{navLinks.map((link, index) => (
								<motion.a
									key={link.href}
									href={link.href}
									className={`relative px-4 py-2 text-sm rounded-full transition-all duration-200 ${
										activeSection === link.href
											? "text-primary-foreground"
											: "text-muted-foreground hover:text-foreground"
									}`}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 * index }}
								>
									{activeSection === link.href && (
										<motion.span
											className="absolute inset-0 bg-primary rounded-full -z-10"
											layoutId="activeNavPill"
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 30,
											}}
										/>
									)}
									{link.label}
								</motion.a>
							))}
						</div>

						{/* CTA Button */}
						<motion.a
							href="#contact"
							className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<Sparkles size={14} />
							Get in Touch
						</motion.a>

						{/* Theme Toggle */}
						<motion.div
							className="ml-3"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<ThemeToggle />
						</motion.div>
					</div>

					{/* Mobile: Theme Toggle + Menu Button */}
					<div className="flex md:hidden items-center gap-2">
						<ThemeToggle />
						<motion.button
							className="p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle menu"
							whileTap={{ scale: 0.9 }}
						>
							<AnimatePresence mode="wait">
								{isMobileMenuOpen ? (
									<motion.div
										key="close"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<X size={22} />
									</motion.div>
								) : (
									<motion.div
										key="menu"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<Menu size={22} />
									</motion.div>
								)}
							</AnimatePresence>
						</motion.button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							className="md:hidden absolute top-full left-0 right-0 mt-2 mx-3 sm:mx-4"
							initial={{ opacity: 0, y: -10, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -10, scale: 0.95 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
						>
							<div className="glass rounded-2xl p-4 sm:p-5 shadow-xl shadow-background/20 border border-border/50">
								{/* Mobile Nav Links */}
								<div className="space-y-1">
									{navLinks.map((link, index) => (
										<motion.button
											key={link.href}
											className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-left transition-all ${
												activeSection === link.href
													? "bg-primary text-primary-foreground font-medium"
													: "text-foreground hover:bg-secondary/50"
											}`}
											onClick={() => {
												setIsMobileMenuOpen(false);
												const element = document.querySelector(link.href);
												element?.scrollIntoView({ behavior: "smooth" });
											}}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.05 * index }}
											whileTap={{ scale: 0.98 }}
										>
											<span className="text-base">{link.label}</span>
											{activeSection === link.href && (
												<motion.div
													className="w-2 h-2 rounded-full bg-primary-foreground"
													layoutId="mobileActiveIndicator"
												/>
											)}
										</motion.button>
									))}
								</div>

								{/* Divider */}
								<div className="h-px bg-border/50 my-4" />

								{/* Mobile CTA */}
								<motion.button
									className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl text-base font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
									onClick={() => {
										setIsMobileMenuOpen(false);
										const element = document.querySelector("#contact");
										element?.scrollIntoView({ behavior: "smooth" });
									}}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.25 }}
									whileTap={{ scale: 0.98 }}
								>
									<Sparkles size={16} />
									Get in Touch
								</motion.button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
}

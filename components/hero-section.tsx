"use client";

import { ChevronDown } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 12,
		},
	},
};

const roles = [
	"Full Stack Developer",
	"Backend Specialist",
	"System Architect",
	"Problem Solver",
];

export function HeroSection() {
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentRole = roles[currentRoleIndex];
		const typingSpeed = isDeleting ? 50 : 100;
		const pauseDuration = 2000;

		if (!isDeleting && displayText === currentRole) {
			// Pause before deleting
			const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
			return () => clearTimeout(timeout);
		}

		if (isDeleting && displayText === "") {
			// Move to next role
			setIsDeleting(false);
			setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
			return;
		}

		const timeout = setTimeout(() => {
			if (isDeleting) {
				setDisplayText(currentRole.substring(0, displayText.length - 1));
			} else {
				setDisplayText(currentRole.substring(0, displayText.length + 1));
			}
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting, currentRoleIndex]);

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden px-4 sm:px-6"
		>
			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-10 sm:top-20 left-0 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-10 sm:bottom-20 right-0 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-chart-2/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.2, 0.4, 0.2],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
				/>
				<motion.div
					className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-chart-3/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</div>

			<motion.div
				className="relative z-10 max-w-4xl mx-auto text-center"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Greeting */}
				<motion.div variants={itemVariants} className="mb-4 sm:mb-6">
					<span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm text-muted-foreground">
						👋 Hello, welcome to my digital space
					</span>
				</motion.div>

				{/* Name */}
				<motion.h1
					variants={itemVariants}
					className="text-responsive-hero font-bold mb-3 sm:mb-4 leading-tight"
				>
					I&apos;m <span className="gradient-text">Muny Roth</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					variants={itemVariants}
					className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-2 sm:mb-3 max-w-2xl mx-auto"
				>
					Crafting scalable systems & elegant solutions from Cambodia 🇰🇭
				</motion.p>

				{/* Typing Title */}
				<motion.div
					variants={itemVariants}
					className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 h-8 sm:h-10 flex items-center justify-center"
				>
					<span>{displayText}</span>
					<motion.span
						className="inline-block w-0.5 h-6 sm:h-8 bg-primary ml-1"
						animate={{ opacity: [1, 0] }}
						transition={{
							duration: 0.5,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				</motion.div>

				{/* CTA Buttons */}
				<motion.div
					variants={itemVariants}
					className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
				>
					<motion.a
						href="#projects"
						className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/25 text-center text-sm sm:text-base"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.98 }}
					>
						View My Projects
					</motion.a>
					<motion.a
						href="#contact"
						className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 glass rounded-xl font-medium text-center text-sm sm:text-base"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.98 }}
					>
						Let&apos;s Connect
					</motion.a>
				</motion.div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.a
				href="#about"
				className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors"
				animate={{ y: [0, -15, 0] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			>
				<span className="text-xs sm:text-sm">Explore Below</span>
				<ChevronDown size={20} />
			</motion.a>
		</section>
	);
}

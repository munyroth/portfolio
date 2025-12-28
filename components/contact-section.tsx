"use client";

import {
	ArrowUpRight,
	ChevronUp,
	Mail,
	MapPin,
	Phone,
	Quote,
} from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "./icons";
import { BackgroundBlobs, SectionHeader } from "./ui/section";

const socialLinks = [
	{
		icon: GitHubIcon,
		href: "https://github.com/munyroth",
		label: "GitHub",
	},
	{
		icon: TelegramIcon,
		href: "https://t.me/munyroth",
		label: "Telegram",
	},
	{
		icon: LinkedInIcon,
		href: "https://linkedin.com/in/munyroth",
		label: "LinkedIn",
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

export function ContactSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="contact"
			className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden"
		>
			{/* Background Decorations */}
			<BackgroundBlobs variant="reversed" />

			<div className="max-w-6xl mx-auto relative z-10" ref={ref}>
				{/* Section Header */}
				<SectionHeader
					title="Get In"
					highlight="Touch"
					description="Ready to collaborate? Let's discuss your next project or opportunity."
				/>

				{/* Main Content - Two Column Layout */}
				<div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
					{/* Left Column - Contact Info */}
					<motion.div
						className="space-y-4 sm:space-y-6"
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
					>
						{/* Email Card */}
						<motion.a
							href="mailto:dr.munyroth@gmail.com"
							className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-5 group block card-glow"
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								y: -4,
								transition: { type: "spring", stiffness: 300 },
							}}
							whileTap={{ scale: 0.98 }}
						>
							<div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
								<Mail className="text-primary w-5 h-5 sm:w-7 sm:h-7" />
							</div>
							<div className="flex-1">
								<p className="text-sm text-muted-foreground mb-1">
									Email me at
								</p>
								<p className="font-semibold text-lg">dr.munyroth@gmail.com</p>
							</div>
							<ArrowUpRight
								className="text-muted-foreground group-hover:text-primary transition-colors"
								size={20}
							/>
						</motion.a>

						{/* Phone Card */}
						<motion.a
							href="tel:+85510326426"
							className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-5 group block card-glow"
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								y: -4,
								transition: { type: "spring", stiffness: 300 },
							}}
							whileTap={{ scale: 0.98 }}
						>
							<div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-chart-2/10 group-hover:bg-chart-2/20 transition-colors">
								<Phone className="text-chart-2 w-5 h-5 sm:w-7 sm:h-7" />
							</div>
							<div className="flex-1">
								<p className="text-sm text-muted-foreground mb-1">Call me at</p>
								<p className="font-semibold text-lg">+855-10-326-426</p>
							</div>
							<ArrowUpRight
								className="text-muted-foreground group-hover:text-chart-2 transition-colors"
								size={20}
							/>
						</motion.a>

						{/* Location Card */}
						<motion.div
							className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-5"
							variants={itemVariants}
						>
							<div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-chart-3/10">
								<MapPin className="text-chart-3 w-5 h-5 sm:w-7 sm:h-7" />
							</div>
							<div>
								<p className="text-sm text-muted-foreground mb-1">Based in</p>
								<p className="font-semibold text-lg">Phnom Penh, Cambodia 🇰🇭</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Right Column - CTA Card */}
					<motion.div
						className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden"
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
						transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
					>
						{/* Decorative gradient */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />

						<div className="relative z-10">
							<motion.div
								className="mb-6"
								animate={{ rotate: [0, 5, -5, 0] }}
								transition={{ duration: 6, repeat: Infinity }}
							>
								<Quote className="text-primary/30" size={48} />
							</motion.div>

							<blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 text-foreground/90">
								&quot;Bridging the divide between algorithmic research and
								product engineering. I build software that brings intelligence
								to life.&quot;
							</blockquote>

							<div className="flex items-center gap-3 sm:gap-4">
								<Image
									src="https://avatars.githubusercontent.com/u/71256712?v=4"
									alt="Muny Roth"
									width={48}
									height={48}
									className="rounded-full border-2 border-primary/20 w-10 h-10 sm:w-12 sm:h-12"
								/>
								<div>
									<p className="font-semibold">Muny Roth</p>
									<p className="text-sm text-muted-foreground">
										Full Stack Developer
									</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
							<p className="text-sm text-muted-foreground mb-4">
								Connect with me
							</p>
							<div className="flex gap-2 sm:gap-3">
								{socialLinks.map((social) => {
									const Icon = social.icon;
									return (
										<motion.a
											key={social.label}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
											whileHover={{ scale: 1.1, y: -2 }}
											whileTap={{ scale: 0.95 }}
											aria-label={social.label}
										>
											<Icon
												size={20}
												className="dark:invert group-hover:invert transition-all duration-300"
											/>
										</motion.a>
									);
								})}
							</div>
						</div>
					</motion.div>
				</div>

				{/* Footer */}
				<motion.div
					className="mt-12 sm:mt-16"
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.7 }}
				>
					{/* Gradient Divider */}
					<div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 sm:mb-8" />

					{/* Footer Content */}
					<div className="flex flex-col items-center gap-4 sm:gap-6">
						{/* Back to Top Button */}
						<motion.button
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							className="p-3 rounded-full glass hover:bg-primary/10 transition-colors group"
							whileHover={{ y: -4 }}
							whileTap={{ scale: 0.95 }}
						>
							<ChevronUp
								size={20}
								className="text-muted-foreground group-hover:text-primary transition-colors"
							/>
						</motion.button>

						{/* Status Indicator */}
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
							</span>
							<span>Available for new projects</span>
						</div>

						{/* Copyright */}
						<p className="text-muted-foreground/60 text-xs">
							&copy; {new Date().getFullYear()} Muny Roth • Crafted with care 🇰🇭
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

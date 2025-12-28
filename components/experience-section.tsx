"use client";

import { Building2, Calendar, ChevronRight, MapPin } from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { SectionHeader } from "./ui/section";

const experiences = [
	{
		company: "konektAgri",
		role: "Full Stack Developer",
		location: "Phnom Penh",
		period: "July 2025 – Present",
		current: true,
		achievements: [
			"Architected and developed agriKredit™, a centralized agritech platform for agricultural credit management",
			"Implemented data-driven credit scoring and early risk detection systems for lenders",
			"Built mobile-first onboarding workflows featuring eKYC and geotagging for farmer data collection",
			"Streamlined agricultural lending processes by integrating knowledge, supplies, and credit modules",
		],
	},
	{
		company: "Digital One",
		role: "Backend Developer",
		location: "Phnom Penh",
		period: "Jun 2024 – Jun 2025",
		achievements: [
			"Developed secure, scalable APIs and optimized database schemas",
			"Integrated payment gateways (Bakong, ABA), FCM, and Telegram bots",
			"Built real-time WebSocket features using Laravel Reverb",
		],
	},
	{
		company: "BLOC Delivery",
		role: "Backend Developer",
		location: "Phnom Penh",
		period: "Jun 2023 – May 2024",
		current: false,
		achievements: [
			"Deployed systems with Docker, NGINX, and CI/CD pipelines",
			"Focused on microservice APIs, authentication, and Redis caching",
		],
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			damping: 15,
		},
	},
};

const achievementVariants: Variants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

export function ExperienceSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="experience"
			className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 gradient-bg"
		>
			<div className="max-w-6xl mx-auto" ref={ref}>
				{/* Section Header */}
				<SectionHeader
					title="Career"
					highlight="Journey"
					description="Building impactful products and growing with amazing teams"
				/>

				{/* Timeline */}
				<motion.div
					className="relative"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{/* Timeline line */}
					<motion.div
						className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-px bg-border md:-translate-x-px"
						initial={{ scaleY: 0 }}
						animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
						style={{ originY: 0 }}
					/>

					{experiences.map((exp, index) => (
						<motion.div
							key={exp.company}
							className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 last:mb-0 ${
								index % 2 === 0 ? "md:flex-row-reverse" : ""
							}`}
							variants={cardVariants}
						>
							{/* Timeline dot */}
							<motion.div
								className="absolute left-0 md:left-1/2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-background -translate-x-[5px] sm:-translate-x-1.5 md:-translate-x-2 z-10"
								initial={{ scale: 0 }}
								animate={isInView ? { scale: 1 } : { scale: 0 }}
								transition={{ delay: 0.5 + index * 0.3, type: "spring" }}
							/>

							{/* Content */}
							<div
								className={`flex-1 ml-5 sm:ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}
							>
								<motion.div
									className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 card-glow"
									whileHover={{ scale: 1.02, y: -4 }}
								>
									{/* Header */}
									<div className="flex flex-wrap items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
										<div>
											<div className="flex items-center gap-1.5 sm:gap-2 mb-1">
												<Building2
													size={16}
													className="text-primary sm:w-[18px] sm:h-[18px]"
												/>
												<h3 className="font-semibold text-base sm:text-lg">
													{exp.company}
												</h3>
												{exp.current && (
													<motion.span
														className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs bg-primary/20 text-primary rounded-full"
														animate={{ scale: [1, 1.05, 1] }}
														transition={{ duration: 2, repeat: Infinity }}
													>
														Current
													</motion.span>
												)}
											</div>
											<p className="text-foreground font-medium text-sm sm:text-base">
												{exp.role}
											</p>
										</div>
									</div>

									{/* Meta */}
									<div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
										<div className="flex items-center gap-1 sm:gap-1.5">
											<MapPin size={14} />
											<span>{exp.location}</span>
										</div>
										<div className="flex items-center gap-1 sm:gap-1.5">
											<Calendar size={14} />
											<span>{exp.period}</span>
										</div>
									</div>

									{/* Achievements */}
									<ul className="space-y-1.5 sm:space-y-2">
										{exp.achievements.map((achievement) => (
											<motion.li
												key={achievement}
												className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground"
												variants={achievementVariants}
											>
												<ChevronRight
													size={16}
													className="text-primary shrink-0 mt-0.5"
												/>
												<span>{achievement}</span>
											</motion.li>
										))}
									</ul>
								</motion.div>
							</div>

							{/* Spacer for alternating layout */}
							<div className="hidden md:block flex-1" />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

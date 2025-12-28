"use client";

import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { SectionHeader } from "./ui/section";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			damping: 15,
		},
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			damping: 15,
			stiffness: 80,
		},
	},
};

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
			<div className="max-w-6xl mx-auto" ref={ref}>
				{/* Section Header */}
				<SectionHeader
					title="About"
					highlight="Me"
					description="Building robust, scalable systems that make a real-world impact"
				/>

				<div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
					{/* About Text */}
					<motion.div
						className="space-y-6"
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
					>
						<motion.p
							variants={itemVariants}
							className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
						>
							I&apos;m a dedicated full stack developer with{" "}
							<span className="text-primary font-semibold">
								nearly 3 years of hands-on experience
							</span>{" "}
							building production-ready web and mobile applications.
						</motion.p>
						<motion.p
							variants={itemVariants}
							className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
						>
							My expertise spans{" "}
							<span className="text-foreground font-medium">
								backend development
							</span>{" "}
							with NestJS, Laravel, and Spring Boot, combined with{" "}
							<span className="text-foreground font-medium">
								frontend craftsmanship
							</span>{" "}
							using Next.js and Flutter.
						</motion.p>
						<motion.p
							variants={itemVariants}
							className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
						>
							I specialize in bridging design with functionality—delivering
							polished user experiences powered by clean, maintainable code.
						</motion.p>
					</motion.div>

					{/* Info Cards */}
					<motion.div
						className="space-y-4"
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
					>
						{/* Education Card */}
						<motion.div
							className="glass rounded-2xl p-4 sm:p-6 card-glow"
							variants={cardVariants}
							whileHover={{ scale: 1.02, y: -4 }}
						>
							<div className="flex items-start gap-4">
								<motion.div
									className="p-2.5 sm:p-3 rounded-xl bg-primary/10"
									whileHover={{ rotate: [0, -10, 10, 0] }}
									transition={{ duration: 0.5 }}
								>
									<GraduationCap className="text-primary" size={20} />
								</motion.div>
								<div className="min-w-0">
									<h3 className="font-semibold text-base sm:text-lg mb-1">
										Education
									</h3>
									<p className="text-foreground font-medium text-sm sm:text-base">
										Bachelor&apos;s in Information Technology Engineering
									</p>
									<p className="text-muted-foreground text-sm">
										Royal University of Phnom Penh
									</p>
									<div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
										<Calendar size={14} />
										<span>2020 – 2024</span>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Experience Card */}
						<motion.div
							className="glass rounded-2xl p-4 sm:p-6 card-glow"
							variants={cardVariants}
							whileHover={{ scale: 1.02, y: -4 }}
						>
							<div className="flex items-start gap-4">
								<motion.div
									className="p-2.5 sm:p-3 rounded-xl bg-chart-2/10"
									whileHover={{ rotate: [0, -10, 10, 0] }}
									transition={{ duration: 0.5 }}
								>
									<Briefcase className="text-chart-2" size={20} />
								</motion.div>
								<div className="min-w-0">
									<h3 className="font-semibold text-base sm:text-lg mb-1">
										Experience
									</h3>
									<p className="text-foreground font-medium text-sm sm:text-base">
										~3 Years Professional
									</p>
									<p className="text-muted-foreground text-sm">
										Full Stack Development
									</p>
									<div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
										<Calendar size={14} />
										<span>2023 – Present</span>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

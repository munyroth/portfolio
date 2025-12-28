"use client";

import { Cloud, CreditCard, Database, Network, Server } from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
	{
		category: "Microservices",
		description: "Enabling async communication between services.",
		icon: Network,
		color: "text-chart-5",
		bgColor: "bg-chart-5/10",
		items: [
			"RabbitMQ",
			"Pub/Sub",
			"Event-Driven",
			"API Gateway",
			"Load Balancer",
			"Caching",
		],
	},
	{
		category: "DevOps & Cloud",
		description: "Automating deployments and infrastructure.",
		icon: Cloud,
		color: "text-chart-3",
		bgColor: "bg-chart-3/10",
		items: ["Docker", "GCP", "GitHub Actions", "GitLab CI", "NGINX"],
	},
	{
		category: "Frameworks",
		description: "Building scalable server-side applications.",
		icon: Server,
		color: "text-primary",
		bgColor: "bg-primary/10",
		items: [
			"NestJS",
			"Laravel",
			"Spring Boot",
			"FastAPI",
			"Next.js",
			"Nuxt.js",
			"Expo",
			"Flutter",
		],
	},
	{
		category: "Databases",
		description: "Storing and managing data efficiently.",
		icon: Database,
		color: "text-chart-4",
		bgColor: "bg-chart-4/10",
		items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
	},
	{
		category: "Payment Gateways",
		description: "Integrating secure payment solutions.",
		icon: CreditCard,
		color: "text-chart-2",
		bgColor: "bg-chart-2/10",
		items: ["Bakong", "PayWay", "Wing Pay", "Stripe"],
	},
];

// All technologies for the marquee
const allTechnologies = [
	"NestJS",
	"Laravel",
	"Spring Boot",
	"FastAPI",
	"Docker",
	"GCP",
	"PostgreSQL",
	"Redis",
	"Next.js",
	"Flutter",
	"RabbitMQ",
	"Kafka",
	"NGINX",
	"MySQL",
	"MongoDB",
	"Supabase",
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

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 90,
			damping: 20,
		},
	},
};

export function TechStackSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const totalTechnologies = skills.reduce(
		(acc, skill) => acc + skill.items.length,
		0,
	);

	return (
		<section
			id="skills"
			className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden"
		>
			{/* Background Accents */}
			<div className="absolute top-1/4 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
			<div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-chart-2/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

			<div className="max-w-6xl mx-auto relative z-10" ref={ref}>
				{/* Section Header */}
				<motion.div
					className="text-center mb-8 sm:mb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
						Technical <span className="gradient-text">Expertise</span>
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-balance mb-6 sm:mb-8">
						A carefully selected toolkit for building high-performance,
						production-grade applications at scale.
					</p>

					{/* Stats Bar */}
					<motion.div
						className="flex items-center justify-center gap-8 text-sm"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ delay: 0.3 }}
					>
						<div className="flex items-center gap-2">
							<span className="text-muted-foreground">
								<span className="font-semibold text-foreground">
									{totalTechnologies}+
								</span>{" "}
								Technologies
							</span>
						</div>
					</motion.div>
				</motion.div>

				{/* Bento Grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{skills.map((skill) => {
						const Icon = skill.icon;
						return (
							<motion.div
								key={skill.category}
								className={`group relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden border border-white/5 card-glow`}
								variants={cardVariants}
								whileHover={{ y: -5, transition: { duration: 0.3 } }}
							>
								{/* Card Glow Effect */}
								<div
									className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${skill.bgColor}`}
								/>

								<div className="relative z-10 flex-1">
									{/* Header */}
									<div className="flex flex-row items-start gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
										<motion.div
											className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${skill.bgColor} shrink-0`}
											whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
											transition={{ duration: 0.4 }}
										>
											<Icon className={skill.color} size={24} />
										</motion.div>
										<div className="min-w-0">
											<h3 className="font-bold tracking-tight text-base sm:text-lg lg:text-xl">
												{skill.category}
											</h3>
											<p className="text-muted-foreground mt-1 text-sm">
												{skill.description}
											</p>
										</div>
									</div>

									{/* Technology Badges */}
									<div className="flex flex-wrap gap-1.5 sm:gap-2">
										{skill.items.map((item) => (
											<Badge
												key={item}
												variant="outline"
												className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-lg sm:rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default`}
											>
												{item}
											</Badge>
										))}
									</div>
								</div>

								{/* Corner Decoration */}
								<div className="absolute bottom-4 right-6 text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none">
									<Icon size={100} strokeWidth={0.5} />
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Technology Marquee */}
				<motion.div
					className="mt-10 sm:mt-16 overflow-hidden"
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.5 }}
				>
					<p className="text-center text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
						Technologies I work with
					</p>
					<div className="relative">
						{/* Gradient Masks */}
						<div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

						{/* Marquee with Motion */}
						<motion.div
							className="flex gap-6"
							animate={{
								x: [0, -1920],
							}}
							transition={{
								x: {
									repeat: Infinity,
									repeatType: "loop",
									duration: 30,
									ease: "linear",
								},
							}}
						>
							{[...allTechnologies, ...allTechnologies, ...allTechnologies].map(
								(tech, index) => (
									<div
										key={`${tech}-${index}`}
										className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full glass border border-white/5 whitespace-nowrap shrink-0"
									>
										<div className="w-2 h-2 rounded-full bg-primary/50" />
										<span className="text-sm font-medium text-muted-foreground">
											{tech}
										</span>
									</div>
								),
							)}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

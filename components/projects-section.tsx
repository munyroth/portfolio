"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { BackgroundBlobs, SectionHeader } from "./ui/section";

const projects = [
	{
		title: "agriKredit™",
		description:
			"A data-driven agritech platform empowering farmers through digital credit scoring and eKYC.",
		color: "text-green-500",
		bgColor: "bg-green-500/10",
		href: "https://konektagri.com/pages/product.html",
		image: "/projects/agrikredit.png",
	},
	{
		title: "Dogenote",
		description:
			"Social media application with real-time messaging and post features.",
		color: "text-chart-3",
		bgColor: "bg-chart-3/10",
		href: "https://dogenote.ai",
		image: "/projects/dogenote.png",
	},
	{
		title: "LuyLeun",
		description:
			"Comprehensive loan management system for tracking and managing financial transactions.",
		color: "text-chart-2",
		bgColor: "bg-chart-2/10",
		href: "https://luyleun.com",
		image: "/projects/luyleun.png",
	},
	{
		title: "Fruit Daily",
		description:
			"Modern fruit shop management system with inventory and order tracking.",
		color: "text-chart-5",
		bgColor: "bg-chart-5/10",
		href: "https://fruitdailycambodia.com",
		image: "/projects/fruitdaily.png",
	},
	{
		title: "InstafoodKH",
		description:
			"Food delivery platform connecting restaurants with hungry customers.",
		color: "text-primary",
		bgColor: "bg-primary/10",
		href: "https://instafoodkh.com",
		image: "/projects/instafoodkh.png",
	},
	{
		title: "Zippy Express",
		description:
			"Delivery tracking system with real-time location updates and notifications.",
		color: "text-chart-2",
		bgColor: "bg-chart-2/10",
		href: "https://zippyexpress.co",
		image: "/projects/zippyexpress.png",
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

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 50, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

export function ProjectsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<section
			id="projects"
			className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden"
		>
			{/* Background Blobs */}
			<BackgroundBlobs variant="default" />

			<div className="max-w-6xl mx-auto relative z-10" ref={ref}>
				{/* Section Header */}
				<SectionHeader
					title="Featured"
					highlight="Projects"
					description="Real-world solutions I've architected and built—from fintech platforms to enterprise systems."
				/>

				{/* Projects Grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{projects.map((project) => {
						return (
							<motion.a
								key={project.title}
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col h-full relative card-glow"
								variants={cardVariants}
								whileHover={{
									y: -10,
									transition: { type: "spring", stiffness: 300, damping: 20 },
								}}
							>
								{/* Card Glow */}
								<div className="absolute inset-0 rounded-3xl bg-primary/0 group-hover:bg-primary/2 transition-colors duration-500 pointer-events-none" />

								{/* Project Image */}
								<div className="relative w-full aspect-[16/10] mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>

								<div className="flex-grow">
									<div className="flex items-center justify-between mb-4">
										<h3 className="font-bold text-lg sm:text-xl lg:text-2xl group-hover:text-primary transition-colors">
											{project.title}
										</h3>
										{project.image && (
											<div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-secondary/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
												<ArrowUpRight size={16} />
											</div>
										)}
									</div>
									<p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
										{project.description}
									</p>
								</div>
							</motion.a>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

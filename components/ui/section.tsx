"use client";

import { motion, useInView } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

interface SectionHeaderProps {
	title: string;
	highlight: string;
	description?: string;
	className?: string;
}

export function SectionHeader({
	title,
	highlight,
	description,
	className = "",
}: SectionHeaderProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<motion.div
			ref={ref}
			className={`text-center mb-10 sm:mb-12 lg:mb-16 ${className}`}
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
			transition={{ duration: 0.6 }}
		>
			<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
				{title} <span className="gradient-text">{highlight}</span>
			</h2>
			{description && (
				<p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
					{description}
				</p>
			)}
		</motion.div>
	);
}

interface BackgroundBlobsProps {
	variant?: "default" | "reversed" | "centered";
}

export function BackgroundBlobs({ variant = "default" }: BackgroundBlobsProps) {
	if (variant === "centered") {
		return (
			<>
				<div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
				<div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-chart-2/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />
			</>
		);
	}

	if (variant === "reversed") {
		return (
			<>
				<div className="absolute top-0 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
				<div className="absolute bottom-0 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-chart-2/5 rounded-full blur-3xl pointer-events-none" />
			</>
		);
	}

	return (
		<>
			<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-chart-2/5 rounded-full blur-3xl pointer-events-none" />
		</>
	);
}

interface SectionContainerProps {
	id: string;
	children: ReactNode;
	className?: string;
	showBlobs?: boolean;
	blobVariant?: "default" | "reversed" | "centered";
}

export function SectionContainer({
	id,
	children,
	className = "",
	showBlobs = false,
	blobVariant = "default",
}: SectionContainerProps) {
	return (
		<section
			id={id}
			className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden ${className}`}
		>
			{showBlobs && <BackgroundBlobs variant={blobVariant} />}
			<div className="max-w-6xl mx-auto relative z-10">{children}</div>
		</section>
	);
}

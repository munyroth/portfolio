import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Muny Roth | Full Stack Developer from Cambodia",
	description:
		"Full Stack Developer crafting scalable systems with NestJS, Laravel, Spring Boot, Next.js, and Flutter. Building production-ready applications from Phnom Penh, Cambodia.",
	keywords: [
		"Full Stack Developer",
		"Backend Developer",
		"NestJS",
		"Laravel",
		"Spring Boot",
		"Next.js",
		"Flutter",
		"Cambodia Developer",
		"Phnom Penh",
		"Software Engineer",
	],
	authors: [{ name: "Muny Roth" }],
	openGraph: {
		title: "Muny Roth | Full Stack Developer",
		description:
			"Crafting scalable systems and elegant solutions. Full Stack Developer specializing in NestJS, Laravel, and modern web technologies.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} font-sans antialiased`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}

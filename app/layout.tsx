import type { Metadata } from "next";
import { Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

const notoSansKhmer = Noto_Sans_Khmer({
	subsets: ["khmer", "latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Muny Roth | Full Stack Developer",
	description: "Crafting scalable systems & elegant solutions from Cambodia 🇰🇭",
	keywords: [
		"Full Stack Developer",
		"Software Engineer",
		"System Architect",
		"NestJS",
		"Laravel",
		"Spring Boot",
		"Next.js",
		"Flutter",
		"Microservices",
		"Event-Driven Architecture",
		"Docker",
		"GCP",
		"PostgreSQL",
		"Redis",
		"Khmer",
		"Cambodia",
		"Phnom Penh",
	],
	authors: [{ name: "Muny Roth", url: "https://munyroth.me" }],
	creator: "Muny Roth",
	publisher: "Muny Roth",
	metadataBase: new URL("https://munyroth.me"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Muny Roth | Full Stack Developer",
		description:
			"Crafting scalable systems & elegant solutions from Cambodia 🇰🇭",
		url: "https://munyroth.me",
		siteName: "Muny Roth",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Muny Roth | Full Stack Developer",
		description:
			"Crafting scalable systems & elegant solutions from Cambodia 🇰🇭",
		creator: "@dr_munyroth",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${notoSansKhmer.variable} font-sans antialiased`}>
				<ThemeProvider>
					{children}
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}

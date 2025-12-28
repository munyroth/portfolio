import { ImageResponse } from "next/og";

export const alt = "Muny Roth - Full Stack Developer";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#09090b", // Dark background
				color: "white",
			}}
		>
			{/* Background decorative elements */}
			<div
				style={{
					position: "absolute",
					top: "-10%",
					right: "-10%",
					width: 400,
					height: 400,
					borderRadius: "50%",
					backgroundColor: "rgba(34, 197, 94, 0.2)", // Primary color (greenish) hint
					filter: "blur(100px)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "-10%",
					left: "-10%",
					width: 400,
					height: 400,
					borderRadius: "50%",
					backgroundColor: "rgba(59, 130, 246, 0.2)", // Blue hint
					filter: "blur(100px)",
				}}
			/>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					zIndex: 10,
				}}
			>
				<h1
					style={{
						fontSize: 80,
						fontWeight: 900,
						letterSpacing: "-0.05em",
						margin: 0,
						background: "linear-gradient(to bottom right, #ffffff, #a3a3a3)",
						backgroundClip: "text",
						color: "transparent",
					}}
				>
					Muny Roth
				</h1>
				<p
					style={{
						fontSize: 40,
						color: "#a1a1aa", // muted-foreground
						margin: "20px 0 0 0",
						fontWeight: 500,
					}}
				>
					Full Stack Developer
				</p>
				<div
					style={{
						display: "flex",
						marginTop: 40,
						gap: 20,
						flexWrap: "wrap",
						justifyContent: "center",
						maxWidth: 900,
					}}
				>
					<div
						style={{
							padding: "10px 20px",
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 20,
							fontSize: 20,
							color: "#e4e4e7",
						}}
					>
						System Architecture
					</div>
					<div
						style={{
							padding: "10px 20px",
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 20,
							fontSize: 20,
							color: "#e4e4e7",
						}}
					>
						Microservices
					</div>
					<div
						style={{
							padding: "10px 20px",
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 20,
							fontSize: 20,
							color: "#e4e4e7",
						}}
					>
						Event-Driven
					</div>
					<div
						style={{
							padding: "10px 20px",
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 20,
							fontSize: 20,
							color: "#e4e4e7",
						}}
					>
						Cloud Native
					</div>
					<div
						style={{
							padding: "10px 20px",
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 20,
							fontSize: 20,
							color: "#e4e4e7",
						}}
					>
						Scalable Systems
					</div>
				</div>
			</div>
		</div>,
		{
			...size,
		},
	);
}

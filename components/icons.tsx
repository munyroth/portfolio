import Image from "next/image";

interface IconProps {
	className?: string;
	size?: number;
}

export const TelegramIcon = ({ className, size = 24 }: IconProps) => (
	<Image
		src="/icons/telegram.svg"
		alt="Telegram"
		width={size}
		height={size}
		className={className}
	/>
);

export const LinkedInIcon = ({ className, size = 24 }: IconProps) => (
	<Image
		src="/icons/linkedin.svg"
		alt="LinkedIn"
		width={size}
		height={size}
		className={className}
	/>
);

export const GitHubIcon = ({ className, size = 24 }: IconProps) => (
	<Image
		src="/icons/github.svg"
		alt="GitHub"
		width={size}
		height={size}
		className={className}
	/>
);

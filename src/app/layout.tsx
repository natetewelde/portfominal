import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Nate | Portfominal",
	description: "A terminal themed portfolio displaying Nate's work and experience",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

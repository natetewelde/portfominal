"use client";

import Globe from "./Globe";
import asciiArt from "@/assets/ascii-art";

export default function TerminalHeader() {
	return (
		<header>
			<span className="text-[#DCDCCC]">NateTewelde (NT) Not A Corporation. All nates reserved.</span>
			<div className="flex flex-row items-start gap-x-96">
				<pre className="ascii">{asciiArt}</pre>
				<Globe className="h-[400px] absolute top-[-80px] left-[700px]" />
			</div>
			<span className="block text-[#8df0df]">Welcome to my interactive portfominal.</span>
			<span className="block text-[#8df0df]">
				For a list of available commands, type <span className="command">&apos;help&apos;</span>.
			</span>
		</header>
	);
}

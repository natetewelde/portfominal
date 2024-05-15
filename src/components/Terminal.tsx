"use client";

import TerminalHeader from "./TerminalHeader";
import TerminalInput from "./TerminalInput";
import Loading from "./Loading/Loading";
import { useState } from "react";

export default function Terminal() {
	const [loading, setLoading] = useState(false);

	return (
		<div className="screen">
			{loading ? (
				<Loading />
			) : (
				<div className="terminal">
					<div className="scanline"></div>
					<TerminalHeader />
					<TerminalInput />
				</div>
			)}
		</div>
	);
}

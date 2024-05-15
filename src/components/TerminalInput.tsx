import { useState, useRef, useEffect } from "react";
import { help, about, socials, projects, skills, shutdown, unknown } from "@/data/commands";

const TerminalInput = () => {
	const [inputValue, setInputValue] = useState("");
	const [caretPosition, setCaretPosition] = useState(0);
	const [commandHistory, setCommandHistory] = useState<{ command: string; output: string[] }[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const terminalPrompt = "visitor@natetewelde.com:~$ ";

	useEffect(() => {
		const handleClick = () => {
			inputRef.current && inputRef.current.focus();
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "ArrowLeft") {
			setCaretPosition((oldCaretPosition) => Math.max(oldCaretPosition - 1, 0));
		} else if (e.key === "ArrowRight") {
			setCaretPosition((oldCaretPosition) => Math.min(oldCaretPosition + 1, inputValue.length));
		} else if (e.key === "Backspace") {
			setInputValue((oldInputValue) => oldInputValue.slice(0, caretPosition - 1) + oldInputValue.slice(caretPosition));
			setCaretPosition((oldCaretPosition) => Math.max(oldCaretPosition - 1, 0));
		} else if (e.key === "Enter") {
			switch (inputValue) {
				case "help":
					setCommandHistory([...commandHistory, { command: inputValue, output: help }]);
					break;
				case "skills":
					setCommandHistory([...commandHistory, { command: inputValue, output: skills }]);
					break;
				case "socials":
					setCommandHistory([...commandHistory, { command: inputValue, output: socials }]);
					break;
				case "projects":
					setCommandHistory([...commandHistory, { command: inputValue, output: projects }]);
					break;
				case "about":
					setCommandHistory([...commandHistory, { command: inputValue, output: about }]);
					break;
				default:
					setCommandHistory([...commandHistory, { command: inputValue, output: unknown }]);
					break;
			}
			setInputValue("");
			setCaretPosition(0);
		} else {
			// Check if the key is a letter or a number
			if (e.key.length === 1 && e.key.match(/[a-z0-9 ]/i)) {
				setInputValue((oldInputValue) => oldInputValue.slice(0, caretPosition) + e.key + oldInputValue.slice(caretPosition));
				setCaretPosition((oldCaretPosition) => oldCaretPosition + 1);
			}
		}
	};

	return (
		<div>
			{commandHistory.map((item, index) => (
				<div key={index}>
					<span>
						{terminalPrompt} {item.command}
					</span>

					{item.output.map((line, index) => (
						<div key={index} dangerouslySetInnerHTML={{ __html: line }}></div>
					))}
				</div>
			))}
			<div onClick={() => inputRef.current && inputRef.current.focus()}>
				<span>{terminalPrompt}</span>
				{inputValue.slice(0, caretPosition)}
				<span
					className={`caret ${inputValue[caretPosition] === " " ? "text-black bg-white" : "text-white bg-[#54a839]"}`}
					data-char={inputValue[caretPosition]}
				>
					{inputValue[caretPosition]}
				</span>
				{inputValue.slice(caretPosition + 1)}
				{caretPosition === inputValue.length && <span className="caret">█</span>}
				<input ref={inputRef} value={inputValue} onKeyDown={handleKeyDown} className="absolute opacity-0 cursor-default" />
			</div>
		</div>
	);
};

export default TerminalInput;

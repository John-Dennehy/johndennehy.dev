"use client";

type errorProps = { error: Error; reset: () => void };

export default function error({ error, reset }: errorProps) {
	return (
		<div className="error">
			<h1>error</h1>
			<p>{error.message}</p>
			<button onClick={reset}>Reset</button>

		</div>
	);
}

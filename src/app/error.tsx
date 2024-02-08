"use client";

import { Button } from "@/components/ui/button";

type errorProps = { error: Error; reset: () => void };

export default function error({ error, reset }: errorProps) {
	return (
		<div className="error">
			<h1>Error Page</h1>
			<p>{error.message}</p>
			<Button onClick={reset}>Reset</Button>
		</div>
	);
}

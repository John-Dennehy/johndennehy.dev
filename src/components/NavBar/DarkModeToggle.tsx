"use client";


export function DarkModeToggle() {
	return (
		<div className="flex">
			<button type="button" aria-label="Toggle Dark Mode" className="rounded p-3 h-10 w-10" onClick={() => {
				document.documentElement.classList.toggle("dark");
			}}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-light-text dark:text-dark-text" viewBox="0 0 20 20" fill="currentColor">
					{document.documentElement.classList.contains("dark") ? <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" /> : <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />}
				</svg>
			</button>
		</div>
	);
}

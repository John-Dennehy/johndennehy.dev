
export function LoadingSpinner({ }) {
	return (
		<div className=" relative">
			<div className="absolute animate-spin rounded-full h-16 w-16 border-t-3 border-b-2 border-brandPrimary" />
			<div className="absolute animate-spin rounded-full h-16 w-16 border-l-3 border-r-2 border-brandAccent" />
		</div>
	);
}

import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function Loading() {
	return (
		(<div className="flex flex-col items-center justify-center h-full">
			<LoadingSpinner />
		</div>)
	);
}


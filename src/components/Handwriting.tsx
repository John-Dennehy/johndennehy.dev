type HandwritingProps = {
	children: string;
};
export function Handwriting({ children }: HandwritingProps) {
	return (
		<span className="text-[130%] font-handwriting text-brandPrimaryDark dark:text-brandAccent">
			{children}
		</span>
	);
}

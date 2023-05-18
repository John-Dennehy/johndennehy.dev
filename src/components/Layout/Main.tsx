type MainProps = {
	children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
	return (
		<main className=" bg-brandBgLight dark:bg-brandBgDark text-brandText dark:text-brandTextLight transition-colors duration-500">
			<div className="container mx-auto">
				<div className="h-full p-8 ">{children}</div>
			</div>
		</main>
	);
}

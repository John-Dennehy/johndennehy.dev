import { Socials } from "@/components/Socials";

export default function Footer() {
	return (
		<footer className="bg-brandBgLight text-brandText transition-colors duration-500 print:hidden">
			<div className="container mx-auto grid grid-cols-3 p-4 ">
				<div className="left flex flex-row items-center  " />
				<div className="middle flex items-center justify-self-center align-middle py-4 ">
					<Socials />
				</div>
				<div className="right flex flex-row-reverse items-center gap-4" />
			</div>
		</footer>
	);
}
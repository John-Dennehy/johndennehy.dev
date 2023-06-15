import Link from "next/link";
import Logo from "@/public/jd-logo.svg";
import Image from "next/image";

export default function Branding({ name }: { name: string }) {
	return (
		<Link href="/">
			<div className="flex gap-4 items-center h-full">
				<Image src={Logo} height={36} alt="Brand Logo" />

				<h1 className="text-3xl font-sans font-medium text-brandPrimaryDark dark:text-brandAccent align-middle">
					{name}
				</h1>
			</div>
		</Link>
	);
}

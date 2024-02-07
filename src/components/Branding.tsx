import Link from "next/link";
import Logo from "@/public/jd-logo.svg";
import Image from "next/image";

export default function Branding({ name }: { name: string }) {
	return (
		<Link href="/">
			<div className="flex flex-shrink-0 gap-4 items-center h-full mr-4">
				{/* <Image src={Logo} height={48} width={48} alt="Brand Logo" /> */}

				<h1 className="text-xl font-sans font-semibold  tracking-tight align-middle">
					{name}
				</h1>
			</div>
		</Link>
	);
}

import Link from "next/link";
import Logo from "/public/jd-logo.svg";
import Image from "next/image";

export default function Branding({ name }: { name: string }) {
	return (
		<Link href="/">
			<div className="flex gap-2 items-center h-full">
				<Image src={Logo} height={34} alt="Brand Logo" />

				<h1 className="text-4xl   text-brandPrimaryDark align-middle">
					{name}
				</h1>
			</div>
		</Link>
	);
}

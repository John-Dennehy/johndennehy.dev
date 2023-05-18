import Image from "next/image";

type ImageBorderProps = {
	size?: number;
};
export default function ImageBorder({ size = 320 }: ImageBorderProps) {
	return (
		<div className=" relative content-center align-middle items-center h-80 w-80 drop-shadow-md"  >
			<Image src="/profile-square.jpg" alt="John Dennehy" width={size} height={size} className="absolute rounded-full z-10" />
			<div className={`absolute h-80 w-80 rounded-full border-l-3 border-b-2 border-brandPrimary z-20`} />
			<div className={`absolute h-80 w-80 rounded-full border-t-6 border-r-4 border-brandAccent z-20`} />
		</div>
	);
}

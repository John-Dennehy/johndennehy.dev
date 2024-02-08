import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
	return (
		<div className="grid h-full   mx-0 px-0  place-content-center  text-gray-600 ">
			<div className="flex flex-col md:flex-row-reverse gap-4 h-full">
				<div>
					<Image
						src="/profile-square.jpg"
						alt="John Dennehy"
						width={200}
						height={200}
						className="rounded-full mx-auto grayscale hover:grayscale-0  transition-all duration-500 h-[200] w-[200]"
					/>
				</div>
				<div className="flex flex-col place-items-center md:place-items-start gap-4 h-full">
					<h2 className="text-3xl font-light text-center w-full	md:text-left ">
						Hey, I&apos;m John
					</h2>

					<p className="text-pretty text-lg font-light max-w-xs">
						I&apos;m a frontend web developer, dad, and all-round geek, based
						outside London.
					</p>
					<Button asChild className="w-fit md:mt-4">
						<a
							target="_blank"
							rel="noreferrer no-referrer"
							href="mailto:hello@johndennehy.dev"
						>
							Let&apos;s talk
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
}

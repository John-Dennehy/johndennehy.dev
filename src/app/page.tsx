import AtIcon from "@/components/icons/AtIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default async function Home() {
	return (
		<div className="grid grid-cols-1 h-full   mx-0 px-0  place-content-center  text-gray-600">
			<h2 className="text-3xl font-light text-center ">Hey, I&apos;m John</h2>

			<p className="text-center  py-4 max-w-md">
				I&apos;m a frontend web developer and all-round geek, based outside
				London. I am currently a full-time dad, but looking for my next role.{" "}
			</p>

			<ul className="social-links flex flex-row gap-4 pt-8 text-blue-500 place-content-center">
				<li>
					<a href="https://www.linkedin.com/in/johnfdennehy/">
						<LinkedInIcon className="h-10 w-10 hover:text-blue-600" />
					</a>
				</li>
				<li>
					<a href="https://github.com/John-Dennehy">
						<GithubIcon className="h-10 w-10 hover:text-blue-600" />
					</a>
				</li>
				<li>
					<a href="mailto:hello@johndennehy.dev">
						<AtIcon className="h-10 w-10 hover:text-blue-600" />
					</a>
				</li>
			</ul>
		</div>
	);
}


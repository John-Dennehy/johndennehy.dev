import AtIcon from "@/components/icons/AtIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export function Socials() {
	return (
		<ul className="social-links flex flex-row gap-4 text-blue-600 place-content-center md:place-content-start">
			<li>
				<a
					href="https://www.linkedin.com/in/johnfdennehy/"
					target="_blank"
					rel="noreferrer no-referrer"
				>
					<LinkedInIcon className="h-10 w-10 hover:text-blue-500 transition-all duration-500 " />
				</a>
			</li>
			<li>
				<a
					href="https://github.com/John-Dennehy"
					target="_blank"
					rel="noreferrer no-referrer"
				>
					<GithubIcon className="h-10 w-10 hover:text-blue-500 transition-all duration-500" />
				</a>
			</li>
			<li>
				<a
					target="_blank"
					rel="noreferrer no-referrer"
					href="mailto:hello@johndennehy.dev"
				>
					<AtIcon className="h-10 w-10 hover:text-blue-500 transition-all duration-500" />
				</a>
			</li>
		</ul>
	);
}

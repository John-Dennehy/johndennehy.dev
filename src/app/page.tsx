import Link from "next/link";
import { Button } from "../components/ui/button";
import ImageBorder from "@/src/components/ImageBorder";


const session = null;

export default async function Home() {
  return (
    <>
      <div className="hero grid grid-cols-3 mt-10 mb-20 items-center">
        <div className="flex flex-col gap-8 col-span-2  transition-colors duration-500">
          <h2 className="text-6xl">
            Hi! 👋 <Handwriting>I&apos;m John.</Handwriting>
          </h2>
          <h3 className="description text-4xl mr-16  transition-colors duration-500">
            I&aposm a web developer <br /> that will bring your{" "}
            <Handwriting>ideas</Handwriting> <br /> to
            <Handwriting>life</Handwriting> with the latest, <br /> innovative
            technology.
          </h3>

          <Button>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <ImageBorder />
      </div>
      <div className="flex flex-col gap-6 ">
        <p>
          My journey into the world of web development has been quite the
          adventure. After 18 years in the financial sector, I sought a
          faster-paced, more dynamic field. I took the plunge and completed an
          intensive web development bootcamp, mastering the fundamentals of Ruby
          and JavaScript. From there, I taught myself React and TypeScript, and
          haven&apost looked back since.
        </p>
        <p>
          Today, I thrive on using the latest technologies to create new and
          exciting digital experiences. I&aposm passionate about staying on top of
          tech trends and continuously learning. In this fast-paced world of
          frontend development, there&aposs always something new to explore and
          master, and that&aposs just how I like it.
        </p>
        <p>
          What sets me apart is not only my technical skills, but also my ability
          to understand and translate the needs of businesses and their users into
          intuitive, accessible, and impactful digital solutions. I believe in not
          just building applications, but crafting experiences that resonate with
          users and bring your designs and ideas to life.
        </p>
        <p>
          Feel free to explore my site to learn more about my skills, experience,
          and the projects I&aposve worked on. If you have a vision you&aposre looking to
          bring to life, or just want to connect and talk tech, don&apost hesitate to
          reach out.
        </p>
      </div>
    </>
  );
}

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

import Image from "next/image"
import { AuthRequiredError } from "@/lib/exceptions"
import ImageBorder from "@/components/ImageBorder"

const session = null

export default async function Home() {


  return (
    <>
      <div className="hero grid grid-cols-3 mt-10 mb-20 items-center">
        <div className="col-span-2">
          <h2 className="text-8xl font-handwriting text-brandPrimaryDark dark:text-brandAccent transition-colors duration-500 mb-8">Hey there! <br /> I&apos;m John!</h2>
          <h3 className="description text-4xl mr-16 text-light-text dark:text-brandPrimary transition-colors duration-500">I&apos;m a web developer that specialises in bringing you designs to life</h3>
        </div>
        <ImageBorder />
      </div>


      <p>Session: {session}</p>



    </>
  )
}

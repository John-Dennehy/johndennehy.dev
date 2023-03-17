import { Button } from "ui";
import Image from "next/image";


export default function Home() {
  return (

    <div className="container flex mx-auto flex-col py-20 min-h-screen">
      <div className="py-1 grid grid-col-1 md:grid-cols-5">
        <div className="relative md:col-start-3 md:col-end-6 md:row-start-1 square aspect-square  z-0">
          <Image fill src="/profile-square.jpg" alt="John Dennehy" className="object-cover border border-solid  rounded-full aspect-square " />
        </div>
        <div className="py-10 z-10 col-start-1 md:col-end-3 md:row-start-1">
          <h1 className="text-6xl text-brandPrimary font-black py-2 tracking-wide">Hi!
            I'm John Dennehy</h1>
          <p className="py-4 text-lg text-brandText py-2 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis impedit doloribus ipsam neque numquam aspernatur inventosre, magni ad ipsa. Non vitae eum accusamus eos expedita sequi incidunt rerum deleniti!</p>
          <Button >Default</Button>
          <Button color="accent" >Accent</Button>
          <Button outline >Outline</Button>

        </div>
      </div>
    </div>



  )
}

"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation" 

const Hero = () => {
  const router = useRouter() 

  const blogRedirect = () => {
    router.push("/blog") 
  } 


  return (
    <div className="flex ml-24 items-center h-[80vh]">
      <div className="flex-col">
        <h1 className="text-texto text-5xl font-bold ">
          Virtù, sua principal fonte de informações <br /> sobre Relações
          Internacionais
        </h1>
        <Button
          onClick={blogRedirect}
          className="bg-texto2 mt-8 rounded-full px-10 py-6 font-regular text-xl"
          variant={"default"}
        >
          Começar a Ler
        </Button>
      </div>

      <Image
        className="ml-32 mr-12"
        src="./hero.svg"
        alt="Hero image"
        width={600}
        height={400}
      />
    </div>
  )
}

export default Hero


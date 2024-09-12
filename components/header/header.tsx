import Image from "next/image"
import { Input } from "../ui/input"

const Header = () => {
  return (
    <div className="h-16 flex items-center px-10 py-10 justify-between shadow-sm">
      <div className="h-full flex items-center">
        <Image src="./logo.svg" width={148} height={64} alt="Logo"/>
      </div>
      <div className="h-full flex items-center">
        <Input className="w-64 text-left" type="text" placeholder="Pesquisar Artigos" />
      </div>
    </div>
  )
}

export default Header

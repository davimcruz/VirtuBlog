import Image from "next/image"
import { Input } from "../ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger, SheetTitle } from "../ui/sheet"
import { Menu } from "lucide-react"

const Header = () => {
  return (
    <div className="h-12 md:h-16 flex items-center px-4 md:px-10 py-10 justify-between shadow-sm">
      <div className="flex items-center w-full md:w-auto">
        <Image
          src="./logo.svg"
          width={148}
          height={64}
          alt="Logo"
          className="w-24 md:w-36 lg:w-36"
        />
      </div>

      <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-texto w-8 h-10" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mt-8"></SheetTitle>
            <SheetDescription className="flex justify-center items-center">
              <div className="items-center">
                <Input
                  className="w-64 text-left"
                  type="text"
                  placeholder="Pesquisar Artigos"
                />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>

      <div className="hidden md:flex h-full items-center">
        <Input
          className="w-64 text-left"
          type="text"
          placeholder="Pesquisar Artigos"
        />
      </div>
    </div>
  )
}

export default Header

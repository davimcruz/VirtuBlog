import Image from "next/image"
import RightAutors from "./right-authors"

const RightSection = () => {
  return (
    <div className="flex-col rounded-lg shadow-xl">
      <div className="h-full px-6 pt-6 ">
        <h1 className="text-zinc-900 text-xl font-bold">
          Conheça nossa Equipe de Redatores
        </h1>
        <p className="text-zinc-600 font-normal text-xs pt-2">
          Corpo editorial da Virtù e autores
        </p>
      </div>

      <RightAutors />

      <div className="relative flex flex-col h-full p-6 my-12 pb-12">
        <h1 className="text-zinc-900 text-xl font-bold">
          Conheça nosso ambiente de Relações Internacionais
        </h1>
        <p className="text-zinc-600 font-normal text-xs pt-2">
          Localizado na PUC Goiás Campus V - Goiânia
        </p>

        <div className="flex justify-center mt-6 relative">
          <Image
            src="https://www.jornalopcao.com.br/wp-content/uploads/2018/12/PUC-GO-620x350.png"
            alt="PUC Goiás"
            width={1920}
            height={1080}
            className="w-[90%] h-[80%] rounded-lg mt-4 blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-center text-lg font-bold">
              Av. Fued José Sebba, 1184 - Jardim Goiás <br /> Goiânia - GO,
              74805-100
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection

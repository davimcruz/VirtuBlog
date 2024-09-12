import Image from "next/image"

const RightAutors = () => {
 return (
   <div className="flex-col pt-6 shadow-sm pb-4">
     <div className="flex py-6">
       <Image
         src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg"
         alt="Foto autor 1"
         width={64}
         height={64}
         className="rounded-full ml-6 max-w-[64px]"
       />
       <div className="flex-col">
         <p className="font-bold ml-4 mt-2">Davi Machado</p>
         <p className="font-normal text-xs ml-4">
           Bacharelando Relações Internacionais <br /> PUC Goiás
         </p>
       </div>
     </div>
     <div className="flex py-6">
       <Image
         src="https://img.freepik.com/psd-premium/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671167.jpg?w=360"
         alt="Foto autor 2"
         width={64}
         height={64}
         className="rounded-full ml-6 max-w-[64px]"
       />

       <div className="flex-col">
         <p className="font-bold ml-4 mt-2">Luísa Cruz</p>
         <p className="font-normal text-xs ml-4">
           Diretora de Marketing de Relações Internacionais <br /> PUC Goías
         </p>
       </div>
     </div>
     <div className="flex py-4">
       <Image
         src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671132.jpg"
         alt="Foto autor 3"
         width={64}
         height={64}
         className="rounded-full ml-6 max-w-[64px]"
       />

       <div className="flex-col">
         <p className="font-bold ml-4 mt-2">Joana Souza</p>
         <p className="font-normal text-xs ml-4">
           Diretora de Comunicações <br /> PUC Goiás
         </p>
       </div>
     </div>
     <div className="flex py-4">
       <Image
         src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671116.jpg?w=360"
         alt="Foto autor 4"
         width={64}
         height={64}
         className="rounded-full ml-6 max-w-[64px]"
       />

       <div className="flex-col">
         <p className="font-bold ml-4 mt-2">Tiago de Oliveira</p>
         <p className="font-normal text-xs ml-4">
           Presidente da Comissão de Relações Internacionais <br /> PUC Goiás
         </p>
       </div>
     </div>
   </div>
 )
}

export default RightAutors
import Posts from "./posts"
import RightSection from "./right-section"

const posts = [
  {
    title: "Como a Suíça interfere diretamente na economia?",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:
      "https://i.pinimg.com/736x/9d/81/c0/9d81c0a60c39925ce3de3677f33c9c84.jpg",
    authorName: "Davi Machado",
    creationDate: "11/09/2024",
  },
  {
    title: "Nova York e sua influência nas relações públicas",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
    authorName: "Luísa Cruz",
    creationDate: "10/09/2024",
  },
  {
    title: "Brasil volta ao conselho de segurança da ONU",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:
      "https://s2-g1.glbimg.com/DuaiAsMl00QUcVO8WwcqSgGoEoA=/0x0:4831x3114/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/2/0/EWjgoNQH6fCW6jRE5YGw/ap19059734747518.jpg",
    authorName: "João Souza",
    creationDate: "09/09/2024",
  },
  {
    title: "Relações Internacionais da PUC completa 25 anos",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:
      "https://www.pucgoias.edu.br/wp-content/uploads/2024/03/240325-25-Anos-Relacoes-Internacionais-WA-054-768x512.jpg",
    authorName: "Davi Machado",
    creationDate: "08/09/2024",
  },
]

const ArticleSummary = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="flex w-full md:p-6">
        <Posts posts={posts} />
      </div>

      <div className="w-full md:w-[50%] md:p-6">
        <RightSection />
      </div>
    </div>
  )
}

export default ArticleSummary

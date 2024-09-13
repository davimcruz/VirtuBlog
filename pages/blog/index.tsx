import Header from "@/components/header/header"
import ArticleSummary from "@/components/main-articles/articles-summary"
import "../../app/globals.css"
import Footer from "@/components/footer/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <ArticleSummary />
      <div className="mt-24 ">
        <Footer />
      </div>
    </div>
  )
}

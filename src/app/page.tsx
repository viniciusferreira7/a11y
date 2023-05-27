import { TermsOfUseContentModal } from './components/TermsOfUseContentModal'
import { Header } from './components/Header'
import RootLayout from './layout'

export default function Home() {
  return (
    <RootLayout>
      <div className="max-w-screen-lg w-full m-auto p-2 min-h-screen flex flex-col">
        <Header />
        <main className="text-gray-300 max-w-screen-md mx-auto mt-10">
          <article>
            <header>
              <h1 className="text-white text-5xl font-bold tracking-wider text-center">
                A11Y
              </h1>
              <h2 className="my-5 text-2xl">Desenvolvendo uma web acessível</h2>
              <h3 className="my-5 text-lg">
                Protocolo e diretrizes orientam o desenvolvimento de tecnologias
                acessíveis, mas é preciso olhar para além de tudo isso.
              </h3>
            </header>
            <p className="my-5">
              Acessibilidade se tornou uma tendência no ecossistema tecnológico
              mundial, diversas empresas passaram a adotar critérios de
              desenvolvimento acessível em seus projetos — por uma questão
              prática ou por exigências legais —, no entanto, ainda faltam
              recursos e consciência do que de fato é inclusivo na internet para
              pessoas com deficiências.
            </p>
            <h3 className="my-5 text-lg">O que é acessibilidade, afinal?</h3>
          </article>
        </main>
        <footer className="flex justify-between items-center mt-auto py-6">
          <h3 className="text-lg text-white uppercase -tracking-tighter">
            Rocketseat - 2023
          </h3>
          <nav>
            <TermsOfUseContentModal />
          </nav>
        </footer>
      </div>
    </RootLayout>
  )
}

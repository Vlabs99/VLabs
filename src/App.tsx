import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { FeaturedProject } from './components/FeaturedProject'
import { Gallery } from './components/Gallery'
import { FutureProjects } from './components/FutureProjects'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Gallery />
        <FutureProjects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

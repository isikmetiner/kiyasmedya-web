import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import KiyasPodcast from './components/KiyasPodcast.jsx'
import KiyasLig from './components/KiyasLig.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <KiyasPodcast />
        <KiyasLig />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

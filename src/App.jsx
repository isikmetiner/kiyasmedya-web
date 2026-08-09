import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ContentUniverse from './components/ContentUniverse.jsx'
import Episodes from './components/Episodes.jsx'
import Brands from './components/Brands.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContentUniverse />
        <Episodes />
        <Brands />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

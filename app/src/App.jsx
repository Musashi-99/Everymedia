import Nav from './components/Nav'
import Hero from './components/Hero'
import Who from './components/Who'
import Expertise from './components/Expertise'
import Featured from './components/Featured'
import Process from './components/Process'
import People from './components/People'
import Cta from './components/Cta'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Nav />
      <div className="wrap">
        <Hero />
        <Who />
        <Expertise />
        <Featured />
        <Process />
      </div>
      <People />
      <Cta />
      <Footer />
    </>
  )
}

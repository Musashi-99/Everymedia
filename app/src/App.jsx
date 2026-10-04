import Nav from './components/Nav'
import Hero from './components/Hero'
import Who from './components/Who'
import Expertise from './components/Expertise'
import Featured from './components/Featured'
import Marquee from './components/Marquee'
import Process from './components/Process'
import People from './components/People'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Progress from './components/Progress'
export default function App() {
  return (
    <>
      <Progress />
      <Nav />
      <div className="wrap">
        <Hero />
        <Who />
        <Expertise />
        <Featured />
        <Marquee />
        <Process />
      </div>
      <People />
      <Cta />
      <Footer />
    </>
  )
}

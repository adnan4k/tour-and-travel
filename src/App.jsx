import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Destination from "./sections/Destination"
import Package from "./sections/Package"
import Values from "./sections/Values"
import Video from "./sections/Video"
import WhyChooseUs from "./sections/WhyChooseUs"

function App() {

  return (
    <>
    <div>
      <Navbar/>
       <Hero/>
       <Destination/>
       <Values/>
       <Video/>
       <WhyChooseUs/>
       <Package/>
       <Footer/>
    </div>
    </>
  )
}

export default App

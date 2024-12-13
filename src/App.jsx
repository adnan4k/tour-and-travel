import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Destination from "./sections/Destination"
import Values from "./sections/Values"
import WhyChooseUs from "./sections/WhyChooseUs"

function App() {

  return (
    <>
    <div>
      <Navbar/>
       <Hero/>
       <Destination/>
       <Values/>
       <WhyChooseUs/>
    </div>
    </>
  )
}

export default App

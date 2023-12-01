import Banner from "./components/layout/Banner"
import Blog from "./components/layout/Blog"
import Fotter from "./components/layout/Fotter"
import Navbar from "./components/layout/Navbar"
import Process from "./components/layout/Process"
import Review from "./components/layout/Review"
import Service from "./components/layout/Service"
import Who from "./components/layout/Who"
import Work from "./components/layout/Work"

function App() {
 
  return (
    <>
     <Navbar/>
     <Banner/>
     <Service/>
     <Who/>
     <Work/>
     <Process/>
     <Review/>
     <Blog/>
     <Fotter/>
    </>
  )
}

export default App

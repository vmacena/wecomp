import Hero from "@/sections/Hero";
import About from "@/sections/About/About";
import Sponsors from "@/sections/Sponsors";
import Organization from "@/sections/Organization";
import Schedule from "@/sections/Schedule";
import Highlight from "@/sections/Highlight";


function App() {
  return (
    <>
      <Hero children={""} />
      <About />
      <Sponsors />
      <Organization />
      <Schedule />
      <Highlight />
    </>
  );
}

export default App;

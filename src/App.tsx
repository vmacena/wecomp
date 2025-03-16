import Hero from "@/sections/Hero";
import About from "@/sections/About/About";
import Sponsors from "@/sections/Sponsors";
import Organization from "@/sections/Organization";


function App() {
  return (
    <>
      <Hero children={""} />
      <About />
      <Sponsors />
      <Organization />
    </>
  );
}

export default App;

import { Suspense } from 'react'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Suspense fallback={null}>
       <NavBar />
       <Home />
       <About />
      <Portfolio />
      <Skills />
      <Contact/>

       <SocialLinks />
       </Suspense>
    </div>
  );
}

export default App;

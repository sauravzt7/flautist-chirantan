import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Bio } from "./components/Bio";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MyMusic } from "./components/MyMusic";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Bio />
      <Gallery />
      <MyMusic />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

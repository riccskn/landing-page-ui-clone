import GlobalStyle from "./styles/GlobalStyle";
import NavBar from "./components/NavBar";
import MainArea from "./components/Main";
import AboutArea from "./components/About";
import Service from "./components/Service";
import ServiceArea from "./components/Service";
import ProductArea from "./components/Product";
import MaterialArea from "./components/Material";
import {Contact} from "./components/Contact/styles";
import ContactArea from "./components/Contact";
import FooterArea from "./components/Footer";

function App() {
  return (
    <div className="app-window">
      <GlobalStyle/>

      <NavBar/>

      <MainArea/>
      <AboutArea/>
      <ServiceArea/>
      <ProductArea/>
      <MaterialArea/>
      <ContactArea/>

      <FooterArea/>
     </div>
  );
}

export default App;

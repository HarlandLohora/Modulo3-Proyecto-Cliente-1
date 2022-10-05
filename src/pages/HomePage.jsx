import logo from "../logo.svg";
import "../App.css";
import Header from "../components/Header/header";
import About from "../components/About/About";
import Services from "../components/Services/services";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Services/>
        <Footer/>
     </div>
  );
}



export default HomePage;
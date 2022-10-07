import "../App.css";
import Header from "../components/Header/header";
import About from "../components/About/About";
import Services from "../components/Services/services";


function HomePage() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Services/>
     </div>
  );
}



export default HomePage;
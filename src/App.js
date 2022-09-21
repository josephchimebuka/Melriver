import React, {useEffect} from "react"; 
import "./App.scss"
import Banner from "./components/Banner";
import Header from "./components/Header";


function App() {
  useEffect(()=>{
    let vh = window.innerHeight*0.01;
    document.documentElement.style.setProperty("vh", `${vh}px`);
  },[]);
  return (
    <div className="App">
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;

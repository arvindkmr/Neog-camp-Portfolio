import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects"

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Projects/>
      <About />
    </div>
  );
}

export default App;
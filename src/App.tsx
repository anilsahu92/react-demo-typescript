import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PageContainer from "./layouts/PageContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <PageContainer />
        <Footer year={2023} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import MainPage from "./pages/mainPage";
import { Helmet } from "react-helmet";
import "./style.css";

const TITLE = "Stories";
function App() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <MainPage />
    </>
  );
}

export default App;

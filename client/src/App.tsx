import React from "react";
import { Container } from "semantic-ui-react";
import MainPage from "./pages/mainPage";
import { Helmet } from "react-helmet";

const TITLE = "Stories";
function App() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        <MainPage />
      </Container>
    </>
  );
}

export default App;

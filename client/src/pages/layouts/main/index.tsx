import React from "react";
import { Container } from "semantic-ui-react";
import Topbar from "../../../components/shared/Topbar";

interface Props {
  children: any;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Container> {children} </Container>
    </>
  );
};

export default MainLayout;

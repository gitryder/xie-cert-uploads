import React from "react";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar title="Let's get your document"></Navbar>
      <Container>
        <Card>test</Card>
      </Container>
    </React.Fragment>
  );
};

export { Home };

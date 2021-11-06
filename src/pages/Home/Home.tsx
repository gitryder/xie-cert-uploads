import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar title="Let's get your document"></Navbar>
      <Container>
        <Card>
          <Input title="Your name" />
          <Input
            title="Your XIE ID"
            info="This will be your username. Make sure you type it correctly."
          />
          <Input
            title="Doc. details"
            info="What's this doc. about? Try to keep it short."
          />
          <Input title="Document" />
        </Card>
        <Button>Yes, Upload it!</Button>
      </Container>
    </React.Fragment>
  );
};

export { Home };

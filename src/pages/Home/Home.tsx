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
          <Input title="Your name" placeholder="Eg. John Doe" />
          <Input
            title="Your XIE ID"
            placeholder="Eg. 2021012000"
            info="This will be your username. Make sure you type it correctly."
          />
          <Input
            title="Doc. details"
            placeholder="Eg. Transmission 2021 Participation"
            info="What's this doc. about? Try to keep it short."
          />
          <Input title="Document" type="file" />
        </Card>
        <Button>Yes, Upload it!</Button>
      </Container>
    </React.Fragment>
  );
};

export { Home };

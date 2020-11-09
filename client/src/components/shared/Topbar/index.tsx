import React from "react";
import {
  Menu,
  Image,
  Container,
  Segment,
  Grid,
  Input,
  Icon,
} from "semantic-ui-react";

const Topbar = () => {
  return (
    <div className="segment">
      <Container>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Image
                src={"http://localhost:3000/yassine.png"}
                className="logo"
              />
            </Grid.Column>
            <Grid.Column>
              <Input icon="search" placeholder="Search..." />
            </Grid.Column>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column className="header-icon">
                    <Icon name="home" size="big" />
                  </Grid.Column>
                  <Grid.Column className="header-icon">
                    <Icon name="send" size="big" />
                  </Grid.Column>
                  <Grid.Column className="header-icon">
                    <Icon name="compass outline" size="big" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Topbar;

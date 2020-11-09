import React from "react";
import { Segment, Image } from "semantic-ui-react";

const StoryContainer = () => {
  return (
    <Segment>
      <Image.Group>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="tiny"
          circular
        />
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="tiny"
          circular
        />
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="tiny"
          circular
        />
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="tiny"
          circular
        />
      </Image.Group>
    </Segment>
  );
};

export default StoryContainer;

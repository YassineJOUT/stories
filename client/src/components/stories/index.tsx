import React from "react";
import { Segment, Image } from "semantic-ui-react";
import { data } from "../../data/mock";

const StoryContainer = () => {
  return (
    <Segment>
      <Image.Group>
        {data.map((elem) => (
          <Image src={elem.profilePic} className="size border" circular />
        ))}
      </Image.Group>
    </Segment>
  );
};

export default StoryContainer;

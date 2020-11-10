import React, { useReducer, useState } from "react";
import { Segment, Image, Modal } from "semantic-ui-react";
import { data } from "../../data/mock";
import { Story } from "../../types/story";
import StoryViewer from "./story-viewer";
interface State {
  open?: boolean;
  stories: Story[];
  nextIndex: number;
}

const initialState: State = {
  open: false,
  stories: [],
  nextIndex: -1,
};

type Action =
  | { type: "open"; open: boolean; stories: Story[]; nextIndex: number }
  | { type: "next"; nextIndex: number; stories: Story[] }
  | { type: "exit" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "open":
      return {
        open: true,
        stories: action.stories,
        nextIndex: action.nextIndex,
      };
    case "next":
      return { ...state, nextIndex: action.nextIndex, stories: action.stories };
    case "exit":
      return initialState;
  }
};

const StoryContainer = () => {
  const [{ open, stories, nextIndex }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleNext = () => {
    console.log({ open, stories, nextIndex },data.length);
    if (nextIndex === data.length - 1) {
      dispatch({ type: "exit" });
    } else {
    
        dispatch({
          type: "next",
          stories: data[nextIndex + 1].stories,
          nextIndex: nextIndex + 1,
        });
    }
  };

  return (
    <Segment>
      <Image.Group>
        {data.map((elem, index) => {
          let className = !elem.stories[0].visited ? "border" : "";
          return (
            <Image
              onClick={() => {
                dispatch({
                  type: "open",
                  stories: elem.stories,
                  open: true,
                  nextIndex: index,
                });
                // setCurrentIndex(index);
                // setStories(elem.stories);
                // setOpen(true);
              }}
              key={"" + index}
              src={elem.profilePic}
              className={"size " + className}
              circular
            />
          );
        })}

        <Modal
          centered={true}
          size="mini"
          open={open}
          onOpen={() =>
            dispatch({
              type: "exit",
              open: true,
              ...{ open, stories, nextIndex },
            })
          }
          onClose={() => dispatch({ type: "exit" })}
        >
          {console.log("Stories : ", stories)}
          <StoryViewer stories={stories} handleNext={handleNext} />
        </Modal>
      </Image.Group>
    </Segment>
  );
};

export default StoryContainer;

import { Story, StoryType } from "../types/story";

const rawData = [
  {
    user: "yassine",
    handler: "@yassine",
    profilePic:
      "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg",
    stories: [{
      type: "image",
      url:
        "https://i.pinimg.com/originals/e1/12/52/e112523f954751cd2c2e0acbd9cd1674.jpg",
      createdAt: "",
      visited: false,
    }],
  },
  {
    user: "anass",
    handler: "@anass",
    profilePic:
      "https://i.pinimg.com/736x/fd/1f/79/fd1f79bccedb91b28bebeaf2f84159f3.jpg",
    stories: [{
      type: "image",
      url:
        "https://i.pinimg.com/originals/d0/89/68/d089681c2c9df830c71e6d5fcde1d9ac.jpg",
      createdAt: "",
      visited: true,
    }],
  },
  {
    user: "oum",
    handler: "@oum",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
    stories: [{
      type: "image",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Eiffel_Tower_Day_Sept._2005_%2810%29.jpg/1200px-Eiffel_Tower_Day_Sept._2005_%2810%29.jpg",
      createdAt: "",
      visited: false,
    },{
      type: "image",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
      createdAt: "",
      visited: false,
    }]
  },
  {
    user: "hamza",
    handler: "@hamza",
    profilePic:
      "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg",
    stories: [{
      type: "image",
      url:
        "https://i.pinimg.com/originals/8f/4d/4c/8f4d4c3be0961d5a5ed36337bf4fc165.jpg",
      createdAt: "",
      visited: true,
    }],
  },
];
rawData.sort((a: StoryType, b: StoryType) => {
  let leftOp: number = a.stories[0].visited ? 1 : 0;
  let rightOp: number = b.stories[0].visited ? 1 : 0;
  return leftOp - rightOp;
});
export const getStories = () => {
  let storiesArray: any = [];
  rawData.map((elem) => storiesArray.push(elem.stories));
  return storiesArray;
};
export const data = rawData;

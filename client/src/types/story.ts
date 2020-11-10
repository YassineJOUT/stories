export interface Story {
  user: string;
  handler: string;
  profilePic: string;
  stories: {
    type: string;
    url: string;
    createdAt: string;
    visited: boolean;
  };
}

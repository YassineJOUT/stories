const env = process.env.REACT_APP_URL === "dev";

export const MAIN_URL = env
  ? "http://localhost:3000/"
  : "https://stories.yj-dev.com/";

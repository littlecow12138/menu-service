const loader = (loading: boolean) => {
  // here to make sure wheather micro app has correctly loaded and it can trigger global loading
  console.log("loading", loading);
};

export const Microconfig = [
  {
    name: "react",
    entry: "http://localhost:8000",
    container: "#subContainer",
    activeRule: "/react",
    loader,
  },
];

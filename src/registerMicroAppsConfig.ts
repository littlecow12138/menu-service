const loader = (loading: boolean) => {
  // here to make sure wheather micro app has correctly loaded and it can trigger global loading
  console.log("loading", loading);
};

export const Microconfig = [
  {
    name: "notes-service",
    entry: "http://localhost:8000",
    container: "#subContainer",
    activeRule: "/notes",
    loader,
  },
  // {
  //   name: "about-me-service",
  //   entry: "http://localhost:8001",
  //   container: "#subContainer",
  //   activeRule: "/aboutMe",
  //   loader,
  // },
];

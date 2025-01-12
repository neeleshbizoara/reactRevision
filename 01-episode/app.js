// const heading = React.createElement("h1", { id: "head" }, "Create React H1");
// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I`m child tag"),
    React.createElement("h2", {}, "I`m child tag")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I`m child tag"),
    React.createElement("h2", {}, "I`m child tag")
  ])
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parent);

import React from "react";
import { createRoot } from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "children", key: "child1" }, [
//     React.createElement("h1", { key: "h1-1" }, "This is H1 Tag"),
//     React.createElement("h2", { key: "h2-1" }, "This is H2 Tag"),
//   ]),
//   React.createElement("div", { id: "children2", key: "child2" }, [
//     React.createElement("h1", { key: "h1-2" }, "This is H1 Tag"),
//     React.createElement("h2", { key: "h2-2" }, "This is H2 Tag"),
//   ]),
// ]);

// react JSX

const jsxtitle = (
  <div className="title">
    <h1 id="heading"> Hello! this is JSX react heading 1!! </h1>
    <h2 id="heading"> Hello! this is JSX react heading 2!! </h2>
  </div>
);

//functional components
const Title = () => (
  <div className="title">
    <h1 id="heading"> Hello! this is react heading 1!! </h1>
    <h2 id="heading"> Hello! this is react heading 2!! </h2>
  </div>
);

const Header = () => (
  <div>
    <h1> This is header functional component! </h1>
    <Title />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<Header />);

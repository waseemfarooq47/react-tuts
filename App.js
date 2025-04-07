// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello react from CDN"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*multiple childrens 
<div id="parent">
    <div id="children">
        <h1>I am h1 tag</h1>
    </div>
    <div id="children">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "This is H1 Tag"),
    React.createElement("h2", {}, "This is H2 Tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "This is H1 Tag"),
    React.createElement("h2", {}, "This is H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

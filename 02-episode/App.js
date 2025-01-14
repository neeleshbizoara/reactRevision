import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", { id: "head" }, "Welcome to React!!");

// JSX is a syntax extension for JavaScript that lets you write
// HTML-like markup inside a JavaScript file
const JsxHeading = () => (
  <h1 id="head" className="head">
    JSX Heading
  </h1>
);
console.log(JsxHeading);

const reactElement = React.createElement('p', {}, 'React Element which is used inside Functional Component.')

const SubHead = () => (
    <div id="container">
        {JsxHeading()}
        <JsxHeading />
        <JsxHeading></JsxHeading>
        <h2>Sub heading</h2>
        {reactElement}
        2 + 2 = {2+2}
  </div>);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<SubHead/>);

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div", // quel type de tag on call
    { id: "something-important" }, // attributs qu'on passe au component ou child
    [
      React.createElement("h1", {}, "Adopt me"), // children
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havenese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Cat",
        breed: "Mixed",
      }),
      React.createElement(Pet, {
        name: "Banana",
        animal: "Bird",
        breed: "Cockatiel",
      }),
    ]
  );
};

render(
  React.createElement(App), // render le component App
  document.getElementById("root")
);

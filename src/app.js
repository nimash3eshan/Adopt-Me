// import React from "react";
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route,  Link } from "react-router-dom";
import Details from "./Details";
// import Pet from "./Pet";
import SearchParams from "./SearchParams"


// const App = () => {
//.   return React.createElement("div", {}, [
//.     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//.     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//.       breed: "Havanese",
//     }),
//.     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//.       breed: "Cockatiel",
//     }),
//.     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
//   ]);
// };


//. render(React.createElement(App), document.getElementById("root"));

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
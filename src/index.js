import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StartRating from "./StartRating";

function Test() {
  const [movies, setMovies] = useState(0);
  return (
    <div>
      <StartRating color="blue" maxRating={10} onSetRating={setMovies} />
      <p>this movie has rating {movies} </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
    <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={4}
    />
    <StartRating maxRating={10} />
  </React.StrictMode>,
);

import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/LatoyaNatashaC?tab=repositories"
            target="_blank"
          >
            Latoya Natasha Campbell
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LatoyaNatashaC?tab=repositories"
            target="_blank"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

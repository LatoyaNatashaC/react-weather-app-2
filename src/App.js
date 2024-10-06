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
            rel="noreferrer"
          >
            Latoya Natasha Campbell
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LatoyaNatashaC?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://latoyas-react-weather-app-two.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

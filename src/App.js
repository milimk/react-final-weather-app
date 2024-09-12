import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container pt-5">
        <header></header>
        <main>
          <Weather />
        </main>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/milimk" target="_blank" rel="noreferrer">
            MiliM
          </a>{" "}
          and it's{" "}
          <a
            href="https://github.com/milimk/react-final-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

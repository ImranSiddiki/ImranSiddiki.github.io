import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Imran's Web Site coming soon...</p>
        <p>I'm a Data Analyst enthusiast with a Bachelor of Mathematics</p>
        <a
          className="App-Link"
          style={{
            textDecoration: "underline",
            color: "#61dafb",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("resume.pdf", "_blank");
          }}
        >
          Download my Resume
        </a>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
// import Login from "./Components/Login";
import Slider from "./Components/Slider";
// import Register from "./Components/Register";
import LgRgPage from "./Components/LgRgPage";

function App() {
  return (
    <>
      <div className="container main">
        <div className="homepage">
          <div className="slidpage">
            <Slider/>
            </div>
            <div className="ldrdPage">
            <LgRgPage/>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

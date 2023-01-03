import "./App.css";
import {
  About,
  ExtraDetails,
  HappyMoment,
  Interests,
  Languages,
  Learn,
  Profile,
  WorkStyle,
} from "./components";

function App() {
  return (
    <div className="App">
      <div>
        <Profile />
      </div>
      <div className="flex-vertical">
        <div className="flex-box">
          <About />
          <ExtraDetails />
        </div>
        <div className="flex-box">
          <Interests />
          <Languages />
        </div>
        <div className="flex-box">
          <HappyMoment />
          <Learn />
        </div>
        <div className="flex-box">
          <About />
          <WorkStyle />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Profile } from "./components";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="app-bg">
        <Header />
        <Profile />
      </div>
    </div>
  );
}

export default App;

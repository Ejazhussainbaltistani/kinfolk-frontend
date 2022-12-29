import "./App.css";
import { DetailCards } from "./components";
function App() {
  return (
    <div className="App">
      <DetailCards
        editCard={function (a: string): void {
          throw new Error("Function not implemented.");
        }}
      >
        <div>
          <h1>Ejaz hussain bala</h1>
          <p>Ejaz hussain baltistani</p>
        </div>
      </DetailCards>
    </div>
  );
}

export default App;

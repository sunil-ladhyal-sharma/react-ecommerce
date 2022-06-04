import logo from "./logo.svg";
import "./App.scss";
// import './feature/CSS/feature.css';
// import { Counter } from './features/counter/Counter';
import Home from "./features/Home.js/Home";
import Navigation from "./features/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <div className="pb-5">
        <Navigation />
      </div>
      <Home />
    </div>
  );
}

export default App;

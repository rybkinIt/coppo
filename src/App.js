import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPages from "./Components/Main-pages/Main-pages";
import Backstage from "./Components/Backstage/Backstage";
import Header from "./Components/Header/Header";

function App() {
  return (
      <div className="App">
          <Header/>
            <Routes>
                <Route path="/" element={<MainPages/>}/>
            </Routes>
          <Backstage/>

      </div>


  );
}

export default App;

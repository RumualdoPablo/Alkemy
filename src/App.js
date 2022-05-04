import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from './components/Login';
import List from "./components/List";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/list" element={<List/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

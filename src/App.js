import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from './components/Login';
import List from "./components/List";
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/list" element={<List/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;

// import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Konten from "./components/Konten";
import RegisrtrationForm from "./components/RegisrtrationForm";
import Macth from "./components/Macth";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboardKonten" element={<Konten />} />
          <Route path="/formRegistration" element={<RegisrtrationForm />} />
          <Route path="/dataMatch" element={<Macth />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

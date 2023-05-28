import './App.css';
import { Builder, Home, HowTo } from './Pages/';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/army-builder" element={<Builder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

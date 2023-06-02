import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Builder from './Pages/Builder';
import Home from './Pages/HomePage';
import HowTo from './Pages/HowToPage';
import Navbar from './Components/NavBar';

interface tileData {
  title: string;
  content: string;
}

function App() {
  const initialTiles = [
    { title: 'Tile 1', content: 'This is the content of Tile 1' },
    { title: 'Tile 2', content: 'This is the content of Tile 2' },
    { title: 'Tile 3', content: 'This is the content of Tile 3' }
  ];
  const [tiles, setTiles] = useState(initialTiles);

  const handleAddTile = (tile: tileData) => {
    const lastTile = tiles[tiles.length - 1];
    const newTile = { ...lastTile };
    setTiles([...tiles, newTile]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route
            path="/army-builder"
            element={<Builder tiles={tiles} onAddClick={handleAddTile} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

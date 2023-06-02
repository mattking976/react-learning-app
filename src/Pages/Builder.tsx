import React, { useState } from 'react';
import Tile from '../Components/Tile';

interface BaseLayoutProps {
  tiles: { title: string; content: string }[];
}

interface TileData {
  title: string;
  content: string;
}

const Builder: React.FC<BaseLayoutProps> = ({ tiles }) => {
  const [centralTiles, setCentralTiles] = useState<TileData[]>([]);

  const handleAddTile = (newTile: TileData) => {
    setCentralTiles([...centralTiles, newTile]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: 'red' }}>
        {tiles.map((tile, index) => (
          <Tile key={index} title={tile.title} content={tile.content} onAddClick={handleAddTile} />
        ))}
      </div>
      <div style={{ flex: 2, backgroundColor: 'blue' }}>
        {centralTiles.map((tile, index) => (
          <Tile key={index} title={tile.title} content={tile.content} onAddClick={handleAddTile} />
        ))}
      </div>
      <div style={{ flex: 1, backgroundColor: 'green' }}>Right section</div>
    </div>
  );
};

export default Builder;

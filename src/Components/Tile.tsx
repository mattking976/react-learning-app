import React from 'react';

interface onClickObj {
  title: string;
  content: string;
}

interface TileProps {
  title: string;
  content: string;
  onAddClick: (arg0: onClickObj) => void;
}

const Tile: React.FC<TileProps> = ({ title, content, onAddClick }) => {
  const handleAddClick = () => {
    onAddClick({ title, content });
  };

  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        padding: '10px',
        margin: '10px',
        position: 'relative'
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <button style={{ position: 'absolute', top: '5px', right: '5px' }} onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
};

export default Tile;

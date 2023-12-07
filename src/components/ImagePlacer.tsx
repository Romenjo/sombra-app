import React from 'react';

const ImagePlacer = ({ imageUrl }) => {
  const styles = {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '350px',
    height: '350px',
    margin: '0 auto', 
  };

  return (
    <div style={styles}>
      <img src={imageUrl} alt="User" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default ImagePlacer;

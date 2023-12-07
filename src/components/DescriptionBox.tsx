import React from 'react';

interface DescriptionBoxProps {
  name: string;
  description: string;
}

const DescriptionBox: React.FC<DescriptionBoxProps> = ({ name, description }) => {
  return (
    <div style={{ maxWidth: '350px', wordWrap: 'break-word', margin: '0 auto'}}>
      <h1 style={{ fontFamily: 'Alice', fontWeight: 'bold', textAlign: 'center' }}>{name}</h1>
      <p style={{ fontFamily: 'Alice', fontSize: '20px' }}>{description}</p>
    </div>
  );
};

export default DescriptionBox;

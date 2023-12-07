import React from "react";

interface HorizontalStackProps {
  children: React.ReactNode;
}

const HorizontalStack: React.FC<HorizontalStackProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}> {children}</div>
  );
};

export default HorizontalStack;

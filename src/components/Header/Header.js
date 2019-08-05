import React from "react";

export default function Header() {
  return (
    <header>
      <div className="nav-container">
        <div className="left-nav">
          <p>Captured Moments</p>
        </div>
        <div className="right-nav">
          <p className="nav-item">Landscape</p>
          <p className="nav-item">Sunset</p>
          <p className="nav-item">Moon</p>
          <p className="nav-item">Travel</p>
        </div>
      </div>
    </header>
  );
}

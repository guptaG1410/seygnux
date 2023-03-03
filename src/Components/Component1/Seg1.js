import React from 'react';
import backG from '../Images/backG.jpg';
import './Seg1.css';

function Seg1() {
  return (
    <>
      <div className="outer">
        <img src={backG} alt="backgroundImage" />
        <div className="inner">
          <div className="text">
            <h1>We crush minimal design. </h1>
            <p>
              <span>MONOCHROME</span> is a creative agency based in chicago . We
              developed the Genesis Framework and build mobile optimized theme
              for WordPress.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seg1;

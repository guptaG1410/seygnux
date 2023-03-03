import React from 'react';
import bgImg from '../Images/bgImg.jpg';
import "./Seg3.css"

function Seg3() {
  return (
    <>
      <div className="Outer">
        <img src={bgImg} alt="backgroundImage" />
        <div className="Inner">
          <h1>We design brands.</h1>
          <p>A simple look is all you need to crush your competition.</p>
          <p className="line"></p>
          <div className="brandList">
            <p>lesacenius</p>
            <p>avec'simple</p>
            <p>WHITESPACE</p>
            <p>m'n'mal'sm</p>
            <p>bareelona33</p>
            <p>smoothVANILLA</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seg3;

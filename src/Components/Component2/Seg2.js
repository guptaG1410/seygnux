import React from 'react';
import "./Seg2.css"

function Seg2() {
  return (
    <>
      <div className="outerCont">
        <div className="innerCont">
          <h1>We build experience.</h1>
          <p>A minimalist approach is the only way to design a website.</p>
          <p className="line"></p>
          <div className="infoCont">
            <div className="infoItem">
              <h3>DESIGN</h3>
              <p>
                With an emphasis on typography, white spaces, and mobile-optimized design, your website will look absolutely breathtaking.{' '}
              </p>
              <button>Learn More</button>
            </div>

            <div className="infoItem">
              <h3>CONTENT</h3>
              <p>
                Our team will teach you the art of writing audience-focused content that will help you achieve the success you truly deserve.{' '}
              </p>
              <button>Learn More</button>
            </div>

            <div className="infoItem">
              <h3>STRATEGY</h3>
              <p>
                We help creative entrepreneurs build their digital business by focusing on three key elements of a successful online platform.{' '}
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seg2;

import React from 'react';
import './Seg4.css';
import data from './data';
import { AiFillHeart } from "react-icons/ai";

function Seg4() {
  return (
    <>
      <div className="outeR">
        <div className="innerCont">
          <h1>We Create Stories.</h1>
          <p>A killer narative will turn your readers into raving fans.</p>
          <p className="line"></p>

          <div className="buildingListCont">
            {data.map((item) => {
              return (
                  <div className="buildingCont">
                    <div className="top">
                      <img src={item.img} alt="backgroundImg" />
                    </div>
                    <div className="bottom">
                      <h3>{item.title}</h3>
                      <p>{`${item.name} . ${item.date}`}</p>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="btnCont">
       <h3>Hit the ground running with a minimalist look. 
       <span>
       <button className="btn">LEARN MORE</button>
       </span>
       </h3> 
    </div>
    {/* Footer */}
    <div className="outFooter">
    <div className="innFooter">
      <h3>M</h3>  
      <p className="textify">Handcrafted with <AiFillHeart/> in chicago. Powered by StudioPress</p>
      <p className="textify">FACEBOOK - TWITTER - INSTAGRAM</p>
    </div>
 </div>
    </>
  );
}

export default Seg4;

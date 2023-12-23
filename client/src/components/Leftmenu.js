import React from 'react';
import '../resources/leftMenu.css';

const leftMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className="vertical-menu">
        <ul className='middle-section'>          
            <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">BATTLEFIELD V</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">BATTLEFIELD 1</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">BATTLEFIELD 4</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">BATTLEFIELD HARDLINE</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">CAREER</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">WATCH</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">NEWS</div>
              </div>
            </div>
        </ul>

        <ul className="bottom-section">
          <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">HELP</div>
              </div>
          </div>
          <div className="middle-container">
              <div className="side-popup">
                <div className="ide-text">QUIT</div>
              </div>
          </div>

        </ul>

    </div>
  );
};
export default leftMenu;
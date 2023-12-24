import React from 'react';
import '../resources/leftMenu.css';

const leftMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className='main-container'>
    <div className="vertical-menu">
        <ul className='middle-section'>     

            <div className="middle-container ">
              <div className="side-popup tab1">
                <div className="ide-text tab-1-text">BATTLEFIELD V</div>              
              </div>
            </div>

            <div className="middle-container">
              <div className="side-popup tab2">
                <div className="ide-text tab-2-text">BATTLEFIELD 1</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup tab3">
                <div className="ide-text tab-3-text">BATTLEFIELD 4</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup tab4">
                <div className="ide-text tab-4-text">BATTLEFIELD HARDLINE</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup tab5">
                <div className="ide-text tab-5-text">CAREER</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup tab6">
                <div className="ide-text tab-6-text">WATCH</div>
              </div>
            </div>
            <div className="middle-container">
              <div className="side-popup tab7">
                <div className="ide-text tab-7-text">NEWS</div>
              </div>
            </div>
        </ul>

        <ul className="bottom-section">
          <div className="middle-container">
              <div className="side-popup tab8">
                <div className="ide-text tab-8-text">HELP</div>
              </div>
          </div>
          <div className="middle-container">
              <div className="side-popup tab9">
                <div className="ide-text tab-9-text">QUIT</div>
              </div>
          </div>

        </ul>

    </div>
    <div className='for-border'></div>
    </div>
  );
};
export default leftMenu;
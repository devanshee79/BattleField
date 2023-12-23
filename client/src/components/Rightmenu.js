import React from 'react';
import '../resources/leftMenu.css';

const rightMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className="invite">
      {/* Squad join */}
      <div className="line"></div>        
      <div className="invite-squad">
        <div className="invite-squad-header">
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
          className='invite-squad-icon' alt="" />
          <div className="invite-squad-header-text">SQUAD</div>
        </div>
        <div className="invite-join-w">
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg" className=' invite-join-icon invite-join-black' alt="" />
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg" className=' invite-join-icon invite-join-default' alt="" />
          <div className="invite-join-h">Squad Join</div>
        </div>
      </div>
      {/* online */}
      <div className="line"></div>        
      <div className="invite-online">
        <div className="invite-online-header">
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
          className='invite-online-icon' alt="" />
          <div className="invite-online-text">Online</div>
        </div>
        <div className="line"></div>
        <div className="invite-online-friend">
          <div className="invite-friend-picture-w">
            <div className="invite-friend-bar"></div>
            <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png" alt="" className='invite-friend-picture'/>
          </div>
          <div className="invite-friend-info">
            <div className="invite-friend-name">Mary Jane</div>
            <div className="invite-friend-status">Online</div>
          </div>
        </div>
      </div>
      {/* offline */}
      <div className="line"></div>          
      <div className="invite-offline">
        <div className="invite-offline-header">
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
          className='invite-offline-icon' alt="" />
          <div className="invite-offline-text">Offline</div>
        </div>
        <div className="line"></div>
        <div className="invite-offline-friend">
          <div className="invite-friend-picture-w">
            <div className="invite-friend-bar"></div>
            <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png" alt="" className='invite-friend-picture'/>
          </div>
          <div className="invite-friend-info">
            <div className="invite-friend-name">420</div>
            <div className="invite-friend-status">Offline</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default rightMenu;
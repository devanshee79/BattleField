import React from 'react'
import { Tabs } from 'antd';
import Soldiercontent from './Soldiercontent';
import Leftmenu from '../components/Leftmenu';
import Rightmenu from '../components/Rightmenu';
import '../resources/soldier.css';

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'HOME',
      children: <Soldiercontent />,
    },
    {
      key: '2',
      label: 'MULTIPLAYER',
      children: <Soldiercontent />,
    },
    {
      key: '3',
      label: 'CAMPAIGN',
      children: <Soldiercontent />,
    },
    {
      key: '4',
      label: 'SOLDIER',
      children: <Soldiercontent />,
    },
    {
      key: '5',
      label: 'STORE',
      children: <Soldiercontent />,
    },
    {
      key: '6',
      label: 'MORE',
      children: <Soldiercontent />,
    },
  ];

function Soldier() {
  return (
    <div>
        <div className="solid-container">
          <Leftmenu />
          <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange} 
          className='tab-container' />
          <div className="level-wrapper">
            <div className="level-icon">
              <div className="level-bar"></div>
              <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png" alt="" className='level-icon1'/>
              <div className="level-flare"></div>
              <div className="level-flare-shadow"></div>
            </div>
            <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038f71092c1304bda9086db_BF4__logo.png" alt="" className='level-logo'/>
          </div>
          <Rightmenu />
        </div>
    </div>
    
    
  )
}

export default Soldier
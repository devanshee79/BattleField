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
          <Rightmenu />
        </div>
    </div>
    
    
  )
}

export default Soldier
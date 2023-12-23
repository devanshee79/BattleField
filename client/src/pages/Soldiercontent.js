import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Soldiercontent() {
  const [soldierData, setSoldierData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual endpoint in your server
        const response = await axios.get('http://localhost:5000/658661f27816ec0e379f50cb');
        console.log(response);
        setSoldierData(response.data);
      } catch (error) {
        console.error('Error fetching soldier data:', error);
        setError('An error occurred while fetching soldier data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {/* SOLDIER IMAGES */}
          <div className="soldier-look">
            <div className="soldier-some-part">
              <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc400244d4c8d9870cd_premium%20dog%20tag.png' className='dog-tag-right' alt="dog tag right" />
              <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc4c0c4fca91b669847_BF4_Celebration_Dog_Tag.png' className='dog-tag-left' alt="dog tag left" />
            </div>
            <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc5c0c4fc008966984e_soldier__pic.png' className='soldier-pic' alt="soldier pic" />
          </div>
          {/* main soldier content data */}
          <div className="soldier-content">
            {/* 1st part */}
            <div className="soldier-info">
              {/* Defining the rank and name all... */}
              {/* rank */}
              <div className="soldier-level">
                <div className="circle"></div>
                <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png" alt="level" className='soldier-level-img' />
              </div>
              {/* Name */}
              <div className="soldier-level-info">
                <div className="soldier-level-header">{soldierData.username}</div>
                <div className="soldier-level-status">
                  <div className="soldier-level-no">
                    <div className="soldier-level-text">63</div>
                  </div>
                  <div className="soldier-level-current">
                    {soldierData.rank}/{soldierData.totaluser}
                  </div>
                  <div className="soldier-level-estimate">- Estimated rank up in 1h</div>
                </div>
                <div className="soldir-level-status"></div>
              </div>
            </div>
            {/* 2nd part */}
            <div className="soldier-data">
              <div className="soldier-menu-w">

                {/* A */}
                <div className="soldier-menu">
                  <div className="soldier-menu-header">WEAPONS</div>
                  <div className="soldier-menu-status">
                    <div className="soldier-menu-status-header">{soldierData.weaponCount}/{soldierData.weaponTotal}</div>
                  </div>
                  <div className="soldier-menu-status-bar">
                    <div className="soldier-menu-status-bar-orange"></div>
                    <div className="soldier-menu-status-bar-black"></div>
                  </div>
                </div>
                {/* B */}
                <div className="soldier-menu">
                  <div className="soldier-menu-header">KITS</div>
                  <div className="soldier-menu-status">
                    <div className="soldier-menu-status-header">{soldierData.kitsCount}/{soldierData.kitsTotal}</div>
                  </div>
                  <div className="soldier-menu-status-bar">
                    <div className="soldier-menu-status-bar-orange"></div>
                    <div className="soldier-menu-status-bar-black"></div>
                  </div>
                </div>
                {/* C */}
                <div className="soldier-menu">
                  <div className="soldier-menu-header">VEHICLES</div>
                  <div className="soldier-menu-status">
                    <div className="soldier-menu-status-header">{soldierData.vehicleCount}/{soldierData.vehicleTotal}</div>
                  </div>
                  <div className="soldier-menu-status-bar">
                    <div className="soldier-menu-status-bar-orange"></div>
                    <div className="soldier-menu-status-bar-black"></div>
                  </div>
                </div>
                {/* D */}
                <div className="soldier-menu">
                  <div className="soldier-menu-header">MEDALS</div>
                  <div className="soldier-menu-status">
                    <div className="soldier-menu-status-header">{soldierData.medalsCount}/{soldierData.medalsTotal}</div>
                  </div>
                  <div className="soldier-menu-status-bar">
                    <div className="soldier-menu-status-bar-orange"></div>
                    <div className="soldier-menu-status-bar-black"></div>
                  </div>
                </div>
                {/* E */}
                <div className="soldier-menu">
                  <div className="soldier-menu-header">ASSIGNMENT</div>
                  <div className="soldier-menu-status">
                    <div className="soldier-menu-status-header">{soldierData.assignmentCount}/{soldierData.assignmentTotal}</div>
                  </div>
                  <div className="soldier-menu-status-bar">
                    <div className="soldier-menu-status-bar-orange"></div>
                    <div className="soldier-menu-status-bar-black"></div>
                  </div>
                </div>
                {/* F */}
                <div className="soldier-menu">
                  <div className="soldier-menu-header">DOG TAGS</div>
                  <div className="soldier-menu-status">
                    <div className="soldier-menu-status-header">{soldierData.dogtagsCount}/{soldierData.dogtagsTotal}</div>
                  </div>
                  <div className="soldier-menu-status-bar">
                    <div className="soldier-menu-status-bar-orange"></div>
                    <div className="soldier-menu-status-bar-black"></div>
                  </div>
                </div>

              </div>
              <div className="soldier-game-stats">
                {/* TOP */}
                <div className="soldier-game-stats-top">
                  <div className="soldier-game-stats-top-container">
                    <div className="soldier-game-status-header">WINS</div>
                    <div className="soldier-game-status-value">{soldierData.winPercent}%</div>
                  </div>
                  <div className="soldier-game-stats-top-container">
                    <div className="soldier-game-status-header">SCORE/MIN</div>
                    <div className="soldier-game-status-value">{soldierData.scorePerMin}</div>
                  </div>
                  <div className="soldier-game-stats-top-container">
                    <div className="soldier-game-status-header">KILLS/MIN</div>
                    <div className="soldier-game-status-value">{soldierData.killsPerMin}</div>
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="soldier-game-stats-bottom">
                  {/* A */}
                  <div className="soldier-game-stats-bottom-container">
                    <div className="soldier-game-stats-bottom-container-header">TOP VEHICLE</div>
                    <div className="soldier-game-stats-bottom-container-info">
                      <div className="soldier-game-stats-bottom-container-info-h">{soldierData.vehicleName}</div>
                      <div className="soldier-game-stats-bottom-container-info-value">{soldierData.vehicleKills}</div>
                    </div>
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc68123215c0f47c3c8_soldier__tank-white.png" alt="" />
                    {/* hover one */}
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc52754eb82199acdb5_soldier__tank-black.png" alt="" />
                  </div>
                  {/* B */}
                  <div className="soldier-game-stats-bottom-container">
                    <div className="soldier-game-stats-bottom-container-header">TOP PRIMARY</div>
                    <div className="soldier-game-stats-bottom-container-info">
                      <div className="soldier-game-stats-bottom-container-info-h">{soldierData.primaryName}</div>
                      <div className="soldier-game-stats-bottom-container-info-value">{soldierData.primaryKills}</div>
                    </div>
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc6b1a1baf4c6b4bff4_acw-white.png" alt="" />
                    {/* hover one */}
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc6eabe3734a771d95a_acw-black.png" alt="" />
                  </div>
                  {/* C */}
                  <div className="soldier-game-stats-bottom-container">
                    <div className="soldier-game-stats-bottom-container-header">TOP CLASS</div>
                    <div className="soldier-game-stats-bottom-container-info">
                      <div className="soldier-game-stats-bottom-container-info-h">{soldierData.className}</div>
                      <div className="soldier-game-stats-bottom-container-info-value">{soldierData.classKills}</div>
                    </div>
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1fa6cf2747d4ae31e5b_engineer-white.svg" alt="" />
                    {/* hover one */}
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1fa034ba969f815fb11_engineer-black.svg" alt="" />
                  </div>
                  {/* D */}
                  <div className="soldier-game-stats-bottom-container">
                    <div className="soldier-game-stats-bottom-container-header">TOP SIDEARM</div>
                    <div className="soldier-game-stats-bottom-container-info">
                      <div className="soldier-game-stats-bottom-container-info-h">{soldierData.sidearmName}</div>
                      <div className="soldier-game-stats-bottom-container-info-value">{soldierData.sidearmKills}</div>
                    </div>
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc4d687fc55d8d3ed57_m9-white.png" alt="" />
                    {/* hover one */}
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc3fbd3c9aec8ff96ed_m9-black.png" alt="" />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Soldiercontent;

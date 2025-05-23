import React from 'react'
import './Main.css'
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';
import { useNavigate } from 'react-router-dom';


const Main = ({MainData,playStatus,setPlayStatus,dataCount,setDataCount}) => {


    const navigate =  useNavigate();

    const handleButtomClicked = () => {
        navigate("/TravelSpots");
    }
   return (
    <div className='main'>
        <div className="main-text">
            <p>{MainData.text1}</p>
            <p>{MainData.text2}</p>
        </div>

        <div className="main_Explore">
            <p>Explore the features</p>
            <img onClick={handleButtomClicked} src={arrow_btn}></img>
        </div>
        <div className="Main-dot-play">
            <ul className="Main-dots">
                <li onClick={() => setDataCount(0)} className={dataCount === 0 ? "Main-dot orange" : "Main-dot"}></li>
                <li onClick={() => setDataCount(1)} className={dataCount === 1 ? "Main-dot orange" : "Main-dot"}></li>
                <li onClick={() => setDataCount(2)} className={dataCount === 2 ? "Main-dot orange" : "Main-dot"}></li>
            </ul>


            <div className="Video-play">
                <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon}/>
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Main

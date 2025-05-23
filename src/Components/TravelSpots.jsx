import React from "react";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import "./TravelSpots.css";
import { useNavigate } from "react-router-dom";

const TravelSpots = () => {


   const navigate = useNavigate();


   const OnClicked = () => {
     navigate("/LakashDeep");
   }
  

  return (
    <div>
      <Container>
        <div className="nav">
          <div className="nav-logo">Travelo</div>

          <ul className="nav-menu">
            <li><i class="fa-solid fa-plane-up pp"></i><br/>Flights</li>
            <li><i class="fa-solid fa-hotel pp"></i><br/>Hotels</li>
            <li><i class="fa-solid fa-umbrella-beach pp"></i><br/>Packages</li>
            <li><i class="fa-solid fa-train pp"></i><br/>&nbsp;Train</li>
            <li><i class="fa-solid fa-bus pp"></i><br/>&nbsp; &nbsp;Bus</li>
            <li><i class="fa-solid fa-taxi pp"></i><br/>&nbsp;&nbsp;Taxi</li>
            <li><i class="fa-solid fa-hospital-user pp"></i><br/>Insurance</li>


          </ul>
        </div>
      </Container>

      <MainContainer>
        <SecondContainer>
        <ul class="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Where to go</a>
          </li>
          <li>Places to Visit in India</li>
        </ul>

        </SecondContainer>

        <FirstConatiner>
        <h1>Places to Visit in India</h1>
        <p>
          Places to Visit in India - The best places to visit in India to
          experience the most beautiful places like historical places, beach
          places, hill stations , honeymoon places, romantic places, adventure
          places, peaceful places and many more.
        </p>
     
       
          <span className="spam">Traveling from </span>
          <a href="#">
            Select City
            <i class="fa-solid fa-angle-down"></i>
          </a>
          </FirstConatiner>
       



       <ThirdContainer>
            <div className="card-container">



            <div className="card">
                    <img src="/20.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">1</span>
                        <h1> Lakshadweep</h1>
                        </div>
                        <p>
                        Lakshadweep is home to serene beaches. You can expect summer heat and the temperature rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers.
                        </p>
                       
                        <div className="card-button">
                           <button className="btn" onClick={OnClicked}>Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>









                <div className="card">
                    <img src="/14.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">2</span>
                        <h1>Goa</h1>
                        </div>
                        <p>
                        Rev up your spirits with the stunning adventures of Goa. You can expect heavy rainfall throughout the season, pleasant sea breeze. Humidity tends to be high. You can also sample delicious cuisines at Goa.
                        </p>
                       
                        <div className="card-button">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>



                



                
                <div className="card">
                    <img src="/21.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">3</span>
                        <h1>Manali</h1>
                        </div>
                        <p>
                        Manali is the perfect escape for romance-seekers. You will love the waterfalls and adventure sports. Additionally, you can try out various adventure activities at Manali.
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>





             

                
            </div>



            <div className="card-container">
                <div className="card">
                    <img src="/12.jpg" ></img>
                    <div className="card-content">
                    <div className="line">
                    <span class="badge">4</span>
                        <h1>Havelock Island</h1>
                        </div>
                        <p>
                        Havelock is an absolute delight for romantic souls. You can expect extremely hot days with temperatures reaching up to 32°C. Don’t forget to indulge in adventure activities at Havelock.
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>



                <div className="card">
                    <img src="/13.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">5</span>
                        <h1>Pondicherry</h1>
                        </div>
                        <p>
                        If you are a beach lover, you must head to Puducherry. You can expect the city is at its hottest during this time. Puducherry is a hot favourite among foodies too.
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/10.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">6</span>
                        <h1>Gokarna</h1>
                        </div>
                        <p>
                        Take your beach love to Gokarna. You can expect extremely hot and humid weather. Also, don’t miss the pilgrimage sites at Gokarna.
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>

           

                
            </div>


            <div className="card-container">
                <div className="card">
                    <img src="/15.jpg" ></img>
                    <div className="card-content">
                    <div className="line">
                    <span class="badge">7</span>
                        <h1>Ooty</h1>
                        </div>
                        <p>
                        Officially called Ootacamund, the hill-town is better known by its nicknameOoty. It is loved by Bollywood directors, honeymooners, families, and even backpackers, for its mountains, lakes, gardens, and waterfalls.
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>



                <div className="card">
                    <img src="/16.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">8</span>
                        <h1>Varkala</h1>
                        </div>
                        <p>
                        Come and fall in love with the beach vibe of Varkala. You can expect heavy to moderate rainfalls. Varkala is also very popular among relaxation-seekers.
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>







                <div className="card">
                    <img src="/11.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">9</span>
                        <h1>Srinagar</h1>
                        </div>
                        <p>
                        Jahangir’s ‘heaven on earth’, Srinagar offers the picturesque Dal Lake, breath-taking mountain views, stunning Mughal gardens and sprawling orchards+
                        </p>
                       
                        <div className="card-button">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>

                




            </div>




            <div className="card-container">
                <div className="card">
                    <img src="/17.jpg" ></img>
                    <div className="card-content">
                    <div className="line">
                    <span class="badge">8</span>
                        <h1>Auli</h1>
                        </div>
                        <p>
                        Dotted with snowy peaks and oak-fringed slopes, Auli is a charming hill station nestled in the Chamoli district of Uttarakhand. A haven for ski lovers, it offers jaw-dropping vistas of Nanda Devi, Kamet and Dunagiri peaks.
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>



              
                <div className="card">
                    <img src="/18.jpg" ></img>
                    <div className="card-content">
                      <div className="line">
                      <span class="badge">10</span>
                        <h1>Rameshwaram</h1>
                        </div>
                        <p>
                        Made famous by the epic Ramayana, Rameshwaram is a quaint beach town and a popular Hindu pilgrimage destination that also attracts nature lovers and adventure enthusiasts.
                        </p>
                       
                        <div className="card-button">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/9.jpg" ></img>
                    <div className="card-content">
                    <div className="line">
                    <span class="badge">11</span>
                        <h1>Leh</h1>
                        </div>
                        <p>
                        Prepare to be wooed by the mesmerizing mountains of Leh. You will love sightseeing and the surreal vistas of snow-capped mountains. 
                        </p>
                        <div className="card-butoon">
                           <button className="btn">Explore</button>
                           <button className="btn btns">Book Hotels</button>
                        </div>
                    </div>
                </div>

                
            </div>







       </ThirdContainer>
      </MainContainer>



    </div>
  );
};

export default TravelSpots;



const ThirdContainer = styled.div`
     background-color: rgb(18, 18, 18);
     height: 400vh;
     margin-top: 35px;
`;

const SecondContainer = styled.div`
  margin-bottom: 25px;
  background-color:rgb(33, 33, 34);;
`;

const FirstConatiner = styled.div`
   max-width: 1180px;
   margin: 0px auto;

h1{
    color: white;
    font-size: 30px;
}
p{
    color:white;
    font-size: 13px;
    margin-bottom:10px;
}
.spam{
    margin-right: 15px;
    color: white;
}
a{
    text-decoration: none;
}
i{
    margin-left: 5px;
}

`;

const MainContainer = styled.div`
  background-color: rgb(33, 33, 34);
  transition: all 0.3s linear 0s;
  height: 249px;
`;

const Container = styled.div`


  .nav {
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 15px 0px;
    color: white;
  }

  .pp{
    font-size: 25px;
    margin-left: 15px;
  }

  .nav-logo {
    font-family: Outfit;
    font-size: 42px;
    color: black;
    font-weight: 500;
  }

  .nav-menu {
    display: flex;
    margin-left: 205px;
    list-style: none;
    gap: 22px;
    font-size: 17px;
    cursor: pointer;
    color: black;

  }
  
  .nav-menu li:hover {
    border-radius: 50px;
    background-color:#f44336;
    color:white;
  }
  .nav-menu li {
    padding: 0px 8px;
  }

  .png {
    width: 150px;
  }
`;

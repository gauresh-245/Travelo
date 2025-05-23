import React from "react";
import styled from "styled-components";
import Container2 from "./Container2";
import { useNavigate } from "react-router-dom";

const LakashDeep = () => {
  
  const navigate = useNavigate();

  const NextPage = () => {
    navigate("/BookTickets");
  }
 
  return (
    <div>
      <MainClass>
        <Container>
          <div className="nav">
            <div className="nav-logo">Travelo</div>
            <ul className="nav-menu">
              <li>
                <i className="fa-solid fa-plane-up pp"></i>
                <br />
                Flights
              </li>
              <li>
                <i className="fa-solid fa-hotel pp"></i>
                <br />
                Hotels
              </li>
              <li>
                <i className="fa-solid fa-umbrella-beach pp"></i>
                <br />
                Packages
              </li>
              <li>
                <i className="fa-solid fa-train pp"></i>
                <br />
                &nbsp;Train
              </li>
              <li>
                <i className="fa-solid fa-bus pp"></i>
                <br />
                &nbsp; &nbsp;Bus
              </li>
              <li>
                <i className="fa-solid fa-taxi pp"></i>
                <br />
                &nbsp;&nbsp;Taxi
              </li>
              <li>
                <i className="fa-solid fa-hospital-user pp"></i>
                <br />
                Insurance
              </li>
            </ul>
          </div>
        </Container>
        <MainSection>
          <Container1>
            <div className="pura">
              <h1>Lakshadweep</h1>
              <p>
                Settled off the Kerala coast on Laccadive sea, Lakshadweep
                translates to a hundred thousand islands. A club of 36 atolls
                and coral reefs, the nature tourism destination is known for
                preserved ecology and water sports.
              </p>
            </div>
          </Container1>
          <Container2 />
        </MainSection>

        <Section>
          <ToDo>
            <h2 className="head">Things To See & Do</h2>
            <center>
              <p className="head2">Most Loved Places</p>
            </center>

            <Card1>
              <div className="card-container">
                <div className="card">
                  <img src="/32.jpg"></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">1</span>

                      <h1>Bangaram</h1>
                    </div>
                    <p>
                      A 20-minute speed boat ride from Agatti island, the
                      Banagaram atoll thread includes tiny islands of
                      Thinnakara, South Bangaram City, Pirili 1 and Pirili 2.
                      The teardrop-shaped island is linked to Agatti with a
                      shallow underwater ridge.
                    </p>

                    <hr className="bob" />

                    <div className="info">
                      <div className="info1">
                        <h3 className="header">1 to 2 days</h3>
                        <p className="para">Suggested Time</p>
                      </div>

                      <div className="info2">
                        <h1 className="header2">Explore  </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="/33.jpg"></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">2</span>

                      <h1>Kalpeni</h1>
                    </div>
                    <p>
                      Two small islets of Tilakkam and Pitti form a single atoll
                      with Kalpeni. The island is also known as Koefaini and is
                      popular for the enormous bay of coral debris believed to
                      be deposited by a violent storm in 1847.
                    </p>

                    <hr className="bob" />

                    <div className="info">
                      <div className="info1">
                        <h3 className="header">1 to 2 days</h3>
                        <p className="para">Suggested Time</p>
                      </div>

                      <div className="info2">
                        <h1 className="header2">Explore </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="/34.jpg"></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">3</span>

                      <h1>Bitra Island Lakshadweep</h1>
                    </div>
                    <p>
                      Bitra Island, the smallest inhabited island in
                      Lakshadweep, is a tranquil haven with a population of
                      nearly 300. The island is approximately 2 metres above sea
                      level, with temperatures averaging 27°C.
                    </p>

                    <hr className="bob" />

                    <div className="info">
                      <div className="info1">
                        <h3 className="header">1 to 2 days</h3>
                        <p className="para">Suggested Time</p>
                      </div>

                      <div className="info2">
                        <h1 className="header2">Explore  </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card1>

            <p className="head3">Memorable Experiences</p>

            <Card1>
              <div className="card-container">
                <div className="card">
                  <img src="/35.jpg" style={{ height: "300px" }}></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">1</span>

                      <h1>Scuba Diving</h1>
                    </div>
                    <p>
                      Scuba Diving is one of the most amazing things that can be
                      done in Lakshadweep. The dive centres are present on the
                      islands of Bangaram, Minicoy and Kavaratti.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img src="/36.jpg" style={{ height: "280px" }}></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">2</span>

                      <h1>Water Sports</h1>
                    </div>
                    <p>
                      Various water sports apart from scuba diving are offered
                      at the Lakshadweep islands, such as snorkelling and
                      canoeing. Enthusiasts are trained and supervised by
                      professionals for added fun and security.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img src="/37.jpg" style={{ height: "300px" }}></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">3</span>

                      <h1>Yacht Cruise</h1>
                    </div>
                    <p>
                      Cruises are arranged for various Lakshadweep islands from
                      Cochin by the government tourism board. Other luxury and
                      private cruise ships are also available for easy
                      transportation and a memorable experience.
                    </p>
                  </div>
                </div>
              </div>
            </Card1>

            <p className="head3">Resorts & Stays</p>

            <Card1>
              <div className="card-container">
                <div className="card">
                  <img src="/38.jpg" style={{ height: "300px" }}></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">1</span>

                      <h1>Bangaram Beach Resort</h1>
                    </div>
                    <p>
                      Located in the centre of the small Bangaram island, the
                      beach resort offers AC and non-AC accommodations with
                      surreal views of sparkling coral reefs, shallow lagoons
                      and coconut trees fringing the island edges.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img src="/39.jpg" style={{ height: "280px" }}></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">2</span>

                      <h1>Lakshadweep Samudram</h1>
                    </div>
                    <p>
                      Lakshadweep Samudram is a tourism package introduced by
                      the Society for Promotion of Nature Tourism and Sports
                      (SPORTS). The cruise begins from Kochi and covers the
                      islands of Kavaratti, Kalpeni and Minicoy by MV Kavaratti.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img src="/40.jpg" style={{ height: "300px" }}></img>
                  <div className="card-content">
                    <div className="line">
                      <span class="badge">3</span>

                      <h1>Kavaratti Island Beach Resort</h1>
                    </div>
                    <p>
                      Located by the shimmering beaches of the north-west
                      Kavaratti, the beach resort is handled by the government
                      tourism board. Lush greenery and silver sand encircles
                      this beach resort.
                    </p>
                  </div>
                </div>
              </div>
            </Card1>
          </ToDo>
        </Section>

        <BookTickets>
          <div>
            <h2>Book Your Trip to Lakshadweep</h2>
            <h3>
              From <span className="he">Delhi</span>
            </h3>
          </div>

          <div className="All">
            <div className="plane1">
              <i class="fa-solid fa-plane-up"></i>
            </div>

            <div className="plane2">
              <h3 className="header2">Travel Options to reach Lakshdweep</h3>
              <p className="para2">Our Recommendations</p>
            </div>
          </div>

            <div className="All2">
              <div className="plane1">
                <p className="logo2">
                  <i class="fa-solid fa-plane-up"></i>
                </p>
              </div>

              <div className="cont">
                <h5 className="a">
                  Flight to Bengaluru Airport, then Flight to Agatti Island
                  Airport
                </h5>
                <p className="b">5h 22m . One way</p>
              </div>

              <div>
                <p className="c">Booking Options Starting From</p>
                <h2 className="d">₹10,881</h2>
                <button onClick={NextPage}>Book Now</button>
              </div>
            </div>





            <div className="All2">
              <div className="plane1">
                <p className="logo3">
                  <i class="fa-solid fa-plane-up"></i>
                </p>
              </div>

              <div className="cont">
                <h5 className="e">
                  Flight to Bengaluru Airport, then Flight to Agatti Island
                  Airport
                </h5>
                <p className="f">5h 22m . One way</p>
              </div>

              <div>
                <p className="g">Booking Options Starting From</p>
                <h2 className="h">₹9,090</h2>
                <button className="btn">Book Now</button>
              </div>
            </div>
        
        </BookTickets>
      </MainClass>
    </div>
  );
};

export default LakashDeep;

const BookTickets = styled.div`
  background-color: rgb(33, 33, 34);
  max-width: 1150px;
  margin: 0 auto;
  border-radius: 10px;
  height: 63vh;
  position: relative;
  margin-bottom: 25px;

  button {
    position: absolute;
    top: 60%;
    left: 86%;
    background-color: rgb(127, 180, 254);
    color: black;
    width: 148px;
    height: 44px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 25px;
    cursor: pointer;
    border: none;
   
  }

  .btn{
    position: absolute;
    top: 82%;
    left: 86%;
    background-color: rgb(127, 180, 254);
    color: black;
    width: 148px;
    height: 44px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    margin-bottom: 15px;
  }

  .a {
    position: absolute;
    color: white;
    top: 57%;
    font-size: 17px;
    left: 9%;
  }

  
  .e {
    position: absolute;
    color: white;
    top: 82%;
    font-size: 17px;
    left: 9%;
  }


  .f{
    position: absolute;
    color: gray;
    top: 90%;
    left: 9%;
  }


  .b {
    position: absolute;
    color: gray;
    top: 66%;
    left: 9%;
  }


  .g{
    position: absolute;
    color: gray;
    top: 83%;
    left: 63%;
    font-size: 16px;
  }
  .c {
    position: absolute;
    color: gray;
    top: 58%;
    left: 63%;
    font-size: 16px;
  }

  .h{
    position: absolute;
    color: white;
    top: 85%;
    left: 75%;
  }
  .d {
    position: absolute;
    color: white;
    top: 60%;
    left: 75%;
  }

  .header2 {
    position: absolute;
    top: 28%;
    left: 7%;
    font-size: 24px;
  }

  .para2 {
    top: 43%;
    left: 8%;
    color: white;
    position: absolute;
  }

  .All {
    display: flex;
  }

  i {
    color:rgb(127, 180, 254);
    font-size: 35px;
    position: absolute;
    top: 35%;
    left: 3%;
  }
  .logo2 {
    top: 60%;
    position: absolute;
    left: 5%;
    color:rgb(127, 180, 254);
  }

  .logo3{
    top: 85%;
    position: absolute;
    left: 5%;
    color:rgb(127, 180, 254);
  }

  img {
    width: 40px;
    border-radius: 100%;
    position: absolute;
    top: 25%;
  }

  .he {
    color: rgb(127, 180, 254);
  }

  h3 {
    color: white;
    top: 15%;
    left: 3%;
    position: absolute;
    font-size: 20px;
  }

  h2 {
    position: absolute;
    top: 3%;
    left: 3%;
    color: white;
  }
`;




const Card1 = styled.div`
  .bob {
    margin-bottom: 6px;
  }

  .header2 {
    color: rgb(127, 180, 254);
    cursor: pointer;
  }

  .info {
    display: flex;
    padding: 0px;
    justify-content: space-between;
  }
  .header {
    color: white;
    font-size: 18px;
  }
  .para {
    font-size: 10px;
    color: lightgray;
  }
`;
const MainClass = styled.div`
  background-color: black;
   height: 570vh;
  
`;

const Section = styled.div`
  height: 400vh;
`;

const ToDo = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 150vh;

  .head3 {
    margin-top: 100px;
    color: rgb(127, 180, 254);
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 75px;
    padding-left: 60px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .head {
    color: white;
    padding: 30px;
    font-size: 40px;
  }
  .head2 {
    color: rgb(127, 180, 254);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 55px;
    text-align: center;
    margin-top: 25px;

    width: 400px;
  }
`;
const MainSection = styled.div`
  width: 100%;
  height: 500px;
  background: rgba(0, 0, 0, 0.7) url("/20.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  z-index: -1;
`;

const Container1 = styled.div`
  h1 {
    color: white;
    position: absolute;
    top: 42%;
    left: 8%;
    font-size: 55px;
  }
  p {
    color: white;
    position: absolute;
    top: 55%;
    left: 8%;
    text-align: justify;
    width: 500px;
  }
`;

const Container = styled.div`
  background-color: white;
  margin-bottom: -15px;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0px;
    color: white;
  }

  .pp {
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
    background-color: #f44336;
    color: white;
  }

  .nav-menu li {
    padding: 0px 8px;
  }

  .png {
    width: 150px;
  }
`;

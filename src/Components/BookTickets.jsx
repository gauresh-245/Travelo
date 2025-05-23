import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BookTickets = () => {

   const navigate = useNavigate();

 
   const NextPage = () => {
    navigate("/FillDetails")
   }


 
  
  return (
    <div>
      <Container>
        <div className="nav">
          <div className="nav-logo">Travelo</div>
          <ul className="nav-menu">
            <li className="hi">
              <p className="icon">
                <i className="fa-solid fa-plane-up pp"></i>
              </p>
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

      <Container2>
        <div className="AllContent">
          <div className="firstContainer">
            <label className="lab" htmlFor="triptype">
              Trip Type
            </label>

            <span className="arrow">&#10549;</span>

            <div className="header">One Way</div>
          </div>

          <div className="firstContainer" style={{ width: "160px" }}>
            <label className="lab" htmlFor="triptype">
              From
            </label>

            <div className="header">New Delhi, India</div>
          </div>

          <span className="arrow2">&#x21c6;</span>

          <div
            className="firstContainer"
            style={{ width: "160px", marginLeft: "20px" }}
          >
            <label className="lab" htmlFor="triptype">
              To
            </label>

            <div className="header">Bengaluru, India</div>
          </div>

          <div className="firstContainer" style={{ width: "160px" }}>
            <label className="lab" htmlFor="triptype">
              DEPART
            </label>

            <div className="header">Wed Jun 26,2024</div>
          </div>

          <div className="firstContainer" style={{ width: "160px" }}>
            <label className="lab" htmlFor="triptype">
              RETURN
            </label>

            <div className="header" style={{ color: "gray" }}>
              Select Return
            </div>
          </div>

          <div className="firstContainer" style={{ width: "180px" }}>
            <label className="lab" htmlFor="triptype">
              PASSENGERS & CLASS
            </label>

            <div className="header">1 Adult, Economy</div>
          </div>
        </div>

        <h4>Flights from New Delhi to Bengaluru</h4>

        <div className="Tickets">
          <div className="sell">
            <div className="adjust">
              <div>
                <img src="/Plane.png" alt="" />
              </div>

              <div className="letter">
                <p
                  style={{
                    position: "absolute",
                    top: "22%",
                    left: "8%",
                    fontWeight: "bold",
                  }}
                >
                  Vistara
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "31%",
                    left: "8%",
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  UK 811
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  06:15
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    top: "35%",
                    fontSize: "11px",
                  }}
                >
                  New Delhi
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "40%",
                    fontSize: "12px",
                    top: "23%",
                    fontWeight: "600",
                  }}
                >
                  02h 50m
                </p>
          
                <p
                  style={{
                    position: "absolute",
                    left: "40.5%",
                    top: "32%",
                    fontSize: "10px",
                  }}
                >
                  Non Stop
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  09:05
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  Bengaluru
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "75%",
                    fontSize: "19px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  ₹ 2,642
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "76%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  per adult
                </p>

                <button  onClick={NextPage}
                  style={{
                    position: "absolute",
                    left: "86%",
                    top: "22%",
                    backgroundColor: "#DAEBFF",
                    color: "#008cff",
                    padding: "8px 16px",
                    border: "1px solid #008cff",
                    borderRadius: "25px",
                    
                  }}
                >
                  Book Now{" "}
                </button>


                <div className="head">
                <p className="para">Get Rs 254 off using MMTSUPER | Extra Rs 25 OFF using UPI paymode | FLAT 10% off on using MMTSBI.</p>

                </div>
              </div>
            </div>
          </div>
        </div>







        <div className="SecondPlane">
          <div className="sell">
            <div className="adjust">
              <div>
                <img src="/Plane2.png" alt="" />
              </div>

              <div className="letter">
                <p
                  style={{
                    position: "absolute",
                    top: "22%",
                    left: "8%",
                    fontWeight: "bold",
                  }}
                >
                  IndiGo
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "31%",
                    left: "8%",
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  6E 6612
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  05.45
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    top: "35%",
                    fontSize: "11px",
                  }}
                >
                  New Delhi
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "40%",
                    fontSize: "12px",
                    top: "23%",
                    fontWeight: "600",
                  }}
                >
                  02h 50m
                </p>
          
                <p
                  style={{
                    position: "absolute",
                    left: "40.5%",
                    top: "32%",
                    fontSize: "10px",
                  }}
                >
                  Non Stop
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  08.30
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  Bengaluru
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "75%",
                    fontSize: "19px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  ₹ 5,799
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "76%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  per adult
                </p>

                <button
                  style={{
                    position: "absolute",
                    left: "86%",
                    top: "22%",
                    backgroundColor: "#DAEBFF",
                    color: "#008cff",
                    padding: "8px 16px",
                    border: "1px solid #008cff",
                    borderRadius: "25px",
                  }}
                >
                  Book Now{" "}
                </button>


                <div className="head">
                <p className="para">Get Rs 254 off using MMTSUPER | Extra Rs 25 OFF using UPI paymode | FLAT 10% off on using MMTSBI.</p>

                </div>
              </div>
            </div>
            </div>
            </div>




            <div className="SecondPlane">
          <div className="sell">
            <div className="adjust">
              <div>
                <img src="/Plane3.png" alt="" />
              </div>

              <div className="letter">
                <p
                  style={{
                    position: "absolute",
                    top: "22%",
                    left: "8%",
                    fontWeight: "bold",
                  }}
                >
                  Air India Expr...
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "31%",
                    left: "8%",
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  I5 764, I5 819
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  04:00
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    top: "35%",
                    fontSize: "11px",
                  }}
                >
                  New Delhi
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "40%",
                    fontSize: "12px",
                    top: "23%",
                    fontWeight: "600",
                  }}
                >
                  02h 50m
                </p>
          
                <p
                  style={{
                    position: "absolute",
                    left: "40.5%",
                    top: "32%",
                    fontSize: "10px",
                  }}
                >
                  Non Stop
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  08:30
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  Bengaluru
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "75%",
                    fontSize: "19px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  ₹ 6,710
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "76%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  per adult
                </p>

                <button
                  style={{
                    position: "absolute",
                    left: "86%",
                    top: "22%",
                    backgroundColor: "#DAEBFF",
                    color: "#008cff",
                    padding: "8px 16px",
                    border: "1px solid #008cff",
                    borderRadius: "25px",
                  }}
                >
                  Book Now{" "}
                </button>


                <div className="head">
                <p className="para">Get Rs 254 off using MMTSUPER | Extra Rs 25 OFF using UPI paymode | FLAT 10% off on using MMTSBI.</p>

                </div>
              </div>
            </div>
            </div>
            </div>



            <div className="SecondPlane">
          <div className="sell">
            <div className="adjust">
              <div>
                <img src="/Plane4.png" alt="" />
              </div>

              <div className="letter">
                <p
                  style={{
                    position: "absolute",
                    top: "22%",
                    left: "8%",
                    fontWeight: "bold",
                  }}
                >
                Air India
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "31%",
                    left: "8%",
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  AI 813
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  08:00
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "23%",
                    top: "35%",
                    fontSize: "11px",
                  }}
                >
                  New Delhi
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "40%",
                    fontSize: "12px",
                    top: "23%",
                    fontWeight: "600",
                  }}
                >
                  02h 50m
                </p>
          
                <p
                  style={{
                    position: "absolute",
                    left: "40.5%",
                    top: "32%",
                    fontSize: "10px",
                  }}
                >
                  Non Stop
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    fontSize: "21px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  11:00
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "57%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  Bengaluru
                </p>

                <p
                  style={{
                    position: "absolute",
                    left: "75%",
                    fontSize: "19px",
                    fontWeight: "bold",
                    top: "21%",
                  }}
                >
                  ₹₹ 6,810
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: "76%",
                    top: "35%",
                    fontSize: "12px",
                  }}
                >
                  per adult
                </p>

                <button
                  style={{
                    position: "absolute",
                    left: "86%",
                    top: "22%",
                    backgroundColor: "#DAEBFF",
                    color: "#008cff",
                    padding: "8px 16px",
                    border: "1px solid #008cff",
                    borderRadius: "25px",
                  }}
                >
                  Book Now{" "}
                </button>


                <div className="head">
                <p className="para">Get Rs 254 off using MMTSUPER | Extra Rs 25 OFF using UPI paymode | FLAT 10% off on using MMTSBI.</p>

                </div>
              </div>
            </div>
            </div>
            </div>
      </Container2>
    </div>
  );
};

export default BookTickets;

const Container2 = styled.div`
  min-height: 300px;
  background-image: linear-gradient(0deg, #15457b, #051423);
  width: 100%;

  .Tickets {
    max-width: 1100px;
    margin: 0px auto;
    margin-top: 25px;
  }
  .SecondPlane {
    max-width: 1100px;
    margin: 0px auto;
    margin-top: 25px;
  }
  .para{
    position: absolute;
     color:white;
     left: 9%;
     font-size: 12px;
  }
  .head{
    background-color: #d46060;
    position: absolute;
    top: 65%;
    left: 9%;
    border-radius: 10px;
    text-align: center;
    height: 20px;
    width:85%;
  }
  .sell {
    border-radius: 10px;
    background-color: white;
    max-width: 900px;
    position: relative;
    height: 170px;

    img {
      margin-top: 40px;
      margin-left: 25px;
    }

   
  }

  h4 {
    margin-left: 125px;
    color: white;
    margin-top: 75px;
    font-size: 25px;
    font-weight: 700;
  }

  .AllContent {
    padding-top: 30px;
    max-width: 1100px;
    margin: 0px auto;
    display: flex;
    gap: 15px;

    position: relative;
  }
  .firstContainer {
    background: hsla(0, 0%, 100%, 0.1);
    width: fit-content;
    border-radius: 6px;
    width: 125px;
    position: relative;
    min-height: 50px;
    display: flex;
    flex-direction: column;
  }
  .arrow {
    color: white;
    position: absolute;
    left: 80%;
    top: 35%;
    font-size: 25px;
    cursor: pointer;
  }
  .arrow2 {
    color: white;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    left: 28%;
    top: 50%;
  }

  .lab {
    color: #008cff;
    text-transform: uppercase;
    padding: 4px 9px 0;
  }
  .header {
    color: white;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 8px;
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
    position: relative;
  }

  .icon {
    margin-bottom: 0px;
    color: #f44336;
  }

  .hi {
  }

  .pp {
    font-size: 30px;
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
    margin-left: 295px;
    list-style: none;
    gap: 22px;
    font-size: 17px;
    cursor: pointer;
    color: black;
  }

  .nav-menu li:hover {
    border-radius: 20px;
    background-color: #f44336;
    color: white;
  }

  .nav-menu li {
    padding: 0px 8px;
  }

  .png {
    width: 140px;
  }
`;

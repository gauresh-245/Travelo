import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FillDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    mobile: "",
    date: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Payment", { state: formData });
  };

  return (
    <div>
      <Main>
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
          <h1>Complete Your Booking </h1> <br />
          <br />
          <br />
          <br />
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
                    <p className="para">
                      Get Rs 254 off using MMTSUPER | Extra Rs 25 OFF using UPI
                      paymode | FLAT 10% off on using MMTSBI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container2>

        <Deatils>
          <h4>Traveller Details</h4>

          <div>
            <form action="/action_page.php" onSubmit={handleSubmit}>
              <div className="line">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                  autoComplete="off"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  autoComplete="off"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email-ID"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="lines">
                <select
                  id="country"
                  name="country"
                  placeholder="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  <option value="india">India</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>

                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile-No."
                  autoComplete="off"
                  value={formData.mobile}
                  onChange={handleChange}
                />

                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Travel Date"
                  autoComplete="off"
                  value={formData.date}
                  onChange={handleChange}
                />

                <div className="gender">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    <span className="custom-radio"></span>
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    <span className="custom-radio"></span>
                    Female
                  </label>
                </div>
              </div>

              <br />
              <input type="submit" value="CONTINUE" />
            </form>
          </div>
        </Deatils>
      </Main>
    </div>
  );
};
export default FillDetails;

const Main = styled.div`
  background-color: lightblue;
  height: 140vh;
  margin: 0px auto;
`;

const Deatils = styled.div`
  max-width: 1200px;
  background-color: white;
  height: 300px;
  border-radius: 10px;
  margin: 0px auto;
  margin-top: 20px;
  position: relative;

  .line {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 25px;
    gap: 30px;
  }

  .lines {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 0px;
    gap: 30px;
  }

  input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="date"] {
    width: 400px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  select {
    width: 400px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .gender {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .gender label {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  input[type="radio"] {
    display: none;
  }

  .custom-radio {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    display: inline-block;
    position: relative;
  }

  input[type="radio"]:checked + .custom-radio {
    border-color: #065af3;
  }

  input[type="radio"]:checked + .custom-radio::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #065af3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input[type="submit"] {
    width: 20%;
    border-radius: 25px;
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    background-image: linear-gradient(97deg, #53b2fe, #065af3 130%);
    color: white;
    padding: 14px 20px;
    margin-left: 465px;
    margin-top: 12px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #5fa563;
  }

  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }

  h4 {
    font-size: 22px;
    position: absolute;
    top: 5%;
    left: 4%;
    font-weight: 600;
  }
`;

const Container2 = styled.div`
  min-height: 300px;
  background-image: linear-gradient(0deg, #15457b, #051423);
  width: 100%;
  position: relative;

  .Tickets {
    max-width: 1100px;
    margin: 0px auto;
  }

  .sell {
    border-radius: 20px;
    background-color: white;
    max-width: 900px;
    position: relative;
    height: 170px;

    img {
      margin-top: 40px;
      margin-left: 25px;
    }
  }

  .para {
    position: absolute;
    color: white;
    left: 9%;
    font-size: 12px;
  }
  .head {
    background-color: #d46060;
    position: absolute;
    top: 65%;
    left: 9%;
    border-radius: 10px;
    text-align: center;
    height: 20px;
    width: 85%;
  }

  h1 {
    position: absolute;
    left: 5%;
    color: white;
    font-size: 25px;
  }
`;

const Container = styled.div`
  background-color: white;
  margin-bottom: -15px;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0px;
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

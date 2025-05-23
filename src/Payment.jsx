import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Payment = () => {
  const location = useLocation();
  const formData = location.state;


  console.log(formData);

  return (
    <MainContainer>
      <Nav>
        <div className="nav-logo">Travelo</div>
        <p className="header">Hey<span>You are viewing this booking at the best price</span></p>
      </Nav>



      <h4 className='fix'>Travler Deatils: </h4>

      <DataContainer>
         
        
      

        {formData ? (
          <div className="all-data">
            <p><strong>First Name:</strong> {formData.firstname}</p>
            <p><strong>Last Name:</strong> {formData.lastname}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
          </div>
        )  :  (
        
         <p>No data</p>
      
      )}
      </DataContainer>


      <h4 className='fix2'>Fare Summary </h4>

      
      <Fair>
       <span> <p>Fare</p> ₹ 5,799</span>
       <span2> <p>Others</p> ₹ 919</span2>
       <hr />
       <span3><p>Total Due</p>₹ 6,718 </span3>

       
       <input type="submit" value="Pay Now" />


      
      </Fair>
    </MainContainer>
  );
};

export default Payment;

const MainContainer = styled.div`
  background-color: lightblue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;



.fix{
 font-size: 25px;
 margin-top: 15px;
 color:#0b3a70;
 font-weight:700; 
 margin-right:1100px; 
}


.fix2{
font-size: 25px;
margin-top: 30px;
color:#0b3a70;
font-weight:700; 
margin-right:1100px; 

}
`;


const Fair = styled.div`

background-color: white;
  width: 35%;
  margin-top: 20px;
  margin-right: 750px;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: black;


span{
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;

}
span2{
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;
}
span3{
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: space-between;
}

input[type="submit"] {
  position: absolute;
  margin-left: 125px;
    width: 10%;
    border-radius: 25px;
    text-align: center;
 
    background-image: linear-gradient(97deg, #53b2fe, #065af3 130%);
    color: white;
    padding: 15px 30px;
    margin-top: 12px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
   
    cursor: pointer;
  }
`;

const Nav = styled.div`
  background-image: linear-gradient(0deg, #15457b, #051423);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;

  .nav-logo {
    font-size: 30px;
    margin-right:1100px;
    font-weight: bold;
  }

  .header {
    margin-right: 720px;
    margin-top: 10px;
    font-size: 17px;
    text-align: center;

    span {
      margin-left: 10px;
      color: #318ef8;
    }
  }
`;

const DataContainer = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 20px;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: black;

  .all-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      margin: 5px 0;
    }
  }
`;

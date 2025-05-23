import React, { useEffect, useRef, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TravelSpots from "./Components/TravelSpots";
import LakashDeep from "./Components/LakashDeep";
import BookTickets from "./Components/BookTickets";
import FillDetails from "./Components/FillDetails";
import Payment from "./Payment";



const App = () => {
  let MainData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Given to ", text2: "your passions" },
  ];
  const [dataCount, setDataCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const internalRef = useRef(null);

  useEffect(() => {
    if (!playStatus) {
      internalRef.current = setInterval(() => {
        setDataCount((count) => (count === 2 ? 0 : count + 1));
      }, 3000);
    } else if (internalRef.current) {
      clearInterval(internalRef.current);
      internalRef.current = null;
    }

    return () => {
      if (internalRef.current) {
        clearInterval(internalRef.current);
      }
    };
  }, [playStatus]);

  return (
    <>
      <Router>
        <Routes>
          <Route 
          path="/"
          element = {
            <AllContainer>
            <Background playStatus={playStatus} dataCount={dataCount} />
            <Navbar />
            <Main
              playStatus={playStatus}
              setPlayStatus={setPlayStatus}
              MainData={MainData[dataCount]}
              dataCount={dataCount}
              setDataCount={setDataCount}
            />
          </AllContainer>
          }
          />

          <Route path="/TravelSpots" element={<TravelSpots />} />
          <Route path="/LakashDeep"  element={<LakashDeep />} />
          <Route path="/BookTickets" element={<BookTickets/>} />
          <Route path="/FillDetails" element={<FillDetails />} />
          <Route path="/Payment" element={<Payment/>} />


        </Routes>
      </Router>
    </>
  );
};

export default App;


const AllContainer = styled.div`

`;
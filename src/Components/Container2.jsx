import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container2 = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Initialize slideIndex to 0
  const [slides, setSlides] = useState([
    '/15.jpg',
    '/26.jpg',
    '/27.jpg',
    '/29.jpg',
    '/30.jpg',
    '/31.jpg'
  ]);

  // Function to handle automatic sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment slideIndex
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    },4000); // Change the interval as needed (3000 milliseconds = 3 seconds)

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [slides.length]); // Re-run effect when slides length changes

  // Function to handle manual sliding to the next slide


  return (
    <StyledContainer>
      <Slide>
        <Img src={slides[slideIndex]} alt={`Slide ${slideIndex}`} />
      </Slide>
    </StyledContainer>
  );
};

export default Container2;

const StyledContainer = styled.div`
  padding-top: 65px;
  border-radius: 8px;
  position:relative;
  width: 80%;
  max-width: 550px; /* Adjust the max-width as needed */
  margin: 0 auto; /* Center the slider horizontally */
`;

const Slide = styled.div`
  position:absolute;
  left: 59%;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 350px;
  cursor: pointer;
`;




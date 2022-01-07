// import React from "react";
import Navbar from "../Navbar";
import Player from '../Player';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LifeOne from '../animations/life.png';
import LifeTwo from '../animations/life-1.png';
import LifeThree from '../animations/life-2.png';
import LifeFour from '../animations/life-3.png';
import Footer from "../Footer";

document.body.style = 'background: #262626;';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #262626;

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const Containervid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr;
  height: 100vh;
  margin-bottom: 90px;
  background: #262626;
  padding: 0rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 3.5rem;
    line-height: 1.1;
  }

  h2 {
    margin-bottom: 0.5rem;
    text-align: justify;
    font-size: 1rem;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 280px;
  max-height: 280px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 50px;
    right: 30px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const AboutSTS = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
      <>
    <Navbar/>
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
           Who are we? 
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Your Lifeguard for life!
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
           About Us? It's not about us, it it? Duoh! It really is about you. When facing a critical situation, communicating and asking for help are key for solving your problem. But what would you do and how would you deal with an accident if hearing and being in touch with the environment around you were difficult? Statistics have shown that the hearing impaired are more likely to be exposed to risks due to difficulties in identifying and reacting to dangers in the environment around them. In this regard, the HES-SO (Haute école spécialisée de Suisse occidentale) Swiss school is committed to helping people with hearing difficulties through this project: an electronic website set up so that they can use it to communicate effectively and make their voice in distress heard. An administrative interface in which an administrator can log in, manage user accounts and upload videos or documents is offered. As for the user's account, it includes a profile section in which they can fill in personal information to introduce themselves.
           Skills to Share is a humanitarian cause and we hope that it makes a positive change in the world where we speak a language we all understand, which is kindness.
 
          </motion.h2>
          
        </ColumnLeft>
        
        <ColumnRight>
          <Image
            src={LifeOne}
            alt='life'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={LifeTwo}
            alt='life'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={LifeThree}
            alt='life'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={LifeFour}
            alt='life'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
    <Containervid><Player/></Containervid>
    <Footer></Footer>
    </>
  );
};

export default AboutSTS;
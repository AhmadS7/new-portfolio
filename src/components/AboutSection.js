import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import homeImg1 from '../img/home1.png';
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hi I'm Ahmad Shah.</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm a <span>Fullstack React</span> Developer
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}></motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          I'm a 27 years old FrontEnd developer. I have experience in developing
          React Apps, testing and debugging user interfaces. I successfully
          managed to work comfortably with React, Next.js, JavaScript, HTML, CSS
          and Node.js.
        </motion.p>
        <motion.button variants={fade}>
          <Link
            to="/contact"
            style={{ 'text-decoration-line': 'none', color: '#D96ED4' }}
          >
            Contact Me
          </Link>
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={homeImg1} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;

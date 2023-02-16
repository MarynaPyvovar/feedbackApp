import React from 'react';
import { FaPinterestP, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { StyledFooter, PinkDecorBall, GreenDecorBall, YellowDecorBall, StyledLink } from './Footer.styled';

const IconColor = {color: '#696969'};

function Footer() {
  return (
    <StyledFooter>
        <StyledLink href="https://www.linkedin.com"><FaLinkedinIn style={IconColor} /></StyledLink>
        <StyledLink href="https://twitter.com/"><FaTwitter style={IconColor} /></StyledLink>
        <StyledLink href="https://www.facebook.com/"><FaFacebookF style={IconColor} /></StyledLink>
        <StyledLink href="https://www.pinterest.ca/"><FaPinterestP style={IconColor} /></StyledLink>
      <PinkDecorBall />
      <GreenDecorBall />
      <YellowDecorBall />
    </StyledFooter>
  )
}

export default Footer

import styled from 'styled-components';
import map from '../../assets/backgrounds/map-image.png';
import pink from '../../assets/backgrounds/pink.svg';
import yellowUp from '../../assets/backgrounds/yellow-up.svg';
import yellowDown from '../../assets/backgrounds/yellow-down.svg';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

export const YellowUpDecorBall = styled.div`
  position: absolute;
  top: -10px;
  left: -40px;
  width: 88px;
  height: 88px;
  background-image: url(${yellowUp});
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 5px;
    left: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 35px;
    left: 30px;
  }
`;

export const DecorMap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    top: -52px;
    left: 814px;
    width: 976px;
    height: 976px;
    background-image: url(${map});
    background-size: cover;
  }
`;

export const PinkDecorBall = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 565px;
    left: 750px;
    width: 214px;
    height: 208px;
    background-image: url(${pink});
    background-size: cover;
    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 570px;
    left: 770px;
  }
`;

export const YellowDownDecorBall = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 500px;
    left: 730px;
    width: 127px;
    height: 127px;
    background-image: url(${yellowDown});
    background-size: cover;
    z-index: 2;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 515px;
    left: 750px;
  }
`;

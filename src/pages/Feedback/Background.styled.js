import styled from 'styled-components';
import map from '../../assets/backgrounds/map-image.png';
import pink from '../../assets/backgrounds/pink.svg';
import yellowUp from '../../assets/backgrounds/yellow-up.svg';
import yellowDown from '../../assets/backgrounds/yellow-down.svg';
import cloud from '../../assets/backgrounds/cloud.png';
import yelltr from '../../assets/backgrounds/yell-tr.png';

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

export const YellowTransparentBall = styled.div`
  position: absolute;
  top: 21px;
  left: 350px;
  width: 87px;
  height: 87px;
  background-image: url(${yelltr});
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 21px;
    left: 650px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 21px;
    left: 750px;
  }
`;

export const Cloud1 = styled.div`
  position: absolute;
  top: 770px;
  left: 233px;
  width: 288px;
  height: 200px;
  background-image: url(${cloud});
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
`;

export const Cloud2 = styled.div`
  position: absolute;
  top: 699px;
  left: 193px;
  width: 131px;
  height: 100px;
  background-image: url(${cloud});
  background-size: cover;
  opacity: 0.4;
  z-index: -1;
`;

export const Cloud3 = styled.div`
  position: absolute;
  top: 745px;
  left: 823px;
  width: 170px;
  height: 128px;
  background-image: url(${cloud});
  background-size: cover;
  opacity: 0.4;
  z-index: -1;
`;

export const Cloud4 = styled.div`
  position: absolute;
  top: 625px;
  left: 435px;
  width: 218px;
  height: 164px;
  background-image: url(${cloud});
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
`;

export const Cloud5 = styled.div`
  position: absolute;
  top: 400px;
  left: 0;
  width: 218px;
  height: 164px;
  background-image: url(${cloud});
  background-size: cover;
  opacity: 0.4;
  z-index: -1;
`;

export const Cloud6 = styled.div`
  position: absolute;
  top: 185px;
  left: 23px;
  width: 245px;
  height: 184px;
  background-image: url(${cloud});
  background-size: cover;
  opacity: 0.4;
  z-index: -1;
`;

export const Cloud7 = styled.div`
  position: absolute;
  top: 130px;
  left: 400px;
  width: 138px;
  height: 103px;
  background-image: url(${cloud});
  background-size: cover;
  opacity: 0.4;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 130px;
    left: 600px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 130px;
    left: 708px;
  }
`;

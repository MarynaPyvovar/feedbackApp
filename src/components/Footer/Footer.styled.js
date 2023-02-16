import styled from 'styled-components';
import pink from '../../assets/backgrounds/pink.svg';
import yellow from '../../assets/backgrounds/yellow-up.svg';
import green from '../../assets/backgrounds/green.svg';

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 50px;
  background-color: ${({ theme }) => `${theme.colors.footerBack}`};
  border-top: 1px solid #d8d8d8;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px 100px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 80px 343px;
  }
`;

export const PinkDecorBall = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    top: -35px;
    left: 58px;
    width: 270px;
    height: 270px;
    background-image: url(${pink});
    background-size: cover;
  }
`;

export const GreenDecorBall = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    position: absolute;
    top: 0;
    right: 50px;
    width: 80px;
    height: 100px;
    background-image: url(${green});
    background-size: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    right: 130px;
  }
`;

export const YellowDecorBall = styled.div`
  position: absolute;
  top: 35px;
  right: -30px;
  width: 90px;
  height: 90px;
  background-image: url(${yellow});
  background-size: cover;
`;

export const StyledLink = styled.a`
  width: 15px;
  height: 15px;
  padding: 7px 10px;
  margin-right: 10px;
  border-radius: 45%;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => `${theme.colors.yellow}`};
  }
`;

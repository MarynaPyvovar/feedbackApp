import React from 'react';
import { useSelector } from 'react-redux';
import { getFeed } from '../../redux/feedback/feedbackSelector';
import { Loader } from '../Loader';
import { StyledButton } from './Button.styled';

function Button({ type, children }) {
  const { isLoading } = useSelector(getFeed);
  return (
    <StyledButton type={type}>
      {isLoading ? <Loader /> : children}
    </StyledButton>
  )
}

export default Button

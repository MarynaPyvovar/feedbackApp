import React from 'react';
import { useSelector } from 'react-redux';
import { getFeed } from '../../redux/feedback/feedbackSelector';
import { Loader } from '../Loader';
import { StyledButton } from './Button.styled';

function Button({ type = 'button', children, onClick = null }) {
  const { isLoading } = useSelector(getFeed);
  return (
    <StyledButton type={type} onClick={onClick}>
      {isLoading ? <Loader /> : children}
    </StyledButton>
  )
}

export default Button

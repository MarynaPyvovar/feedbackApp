import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Title, Feedback } from '../../components';

function ReadFeedbackPage() {
  return (
    <Container>
      <NavLink to={'/'} style={{display: 'inline-block', marginBottom: '30px'}}>Back to form</NavLink>
          <Title>Your opinions about us!</Title>
          <Feedback />
      </Container>
  )
}

export default ReadFeedbackPage
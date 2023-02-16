import React from 'react';
import Background from './Background';
import { Container, Title, FeedbackForm} from '../../components';

function FeedbackPage() {
  return (
    <Background>
      <Container>
        <Title>Reach out to us!</Title>
        <FeedbackForm />
      </Container>
    </Background>
  )
}

export default FeedbackPage

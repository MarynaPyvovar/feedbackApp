import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Title, FeedbackForm} from '../../components';

function PostFeedbackPage() {
  return (
    <Container>
      <NavLink to={'/read'} style={{display: 'inline-block', marginBottom: '30px'}}>Read the feedback</NavLink>
      <Title>Reach out to us!</Title>
      <FeedbackForm />
    </Container>
  )
}

export default PostFeedbackPage

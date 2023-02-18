import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFeedback } from 'redux/feedback/feedbackOperations';
import { getFeed } from 'redux/feedback/feedbackSelector';
import { StyledHeading, StyledMessage } from './Feedback.styled';

function Feedback() {
    const dispatch = useDispatch();
    const { feedback } = useSelector(getFeed);

    useEffect(() => {
      dispatch(getAllFeedback())
    }, [dispatch])

  return (
    <ul>
      {feedback.length > 0 ?
          feedback.map(({ id, name, email, message }) => <li key={id}>
            <StyledHeading>{name}, {email}:</StyledHeading>
            <StyledMessage>{message}</StyledMessage>
          </li>) :
        <StyledHeading>
            Nothing to read for now, so your feedback can be the first one!
        </StyledHeading>}
    </ul>
  )
}

export default Feedback

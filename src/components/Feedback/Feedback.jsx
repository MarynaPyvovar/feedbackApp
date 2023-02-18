import { LoaderRoute } from 'components';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFeedback } from 'redux/feedback/feedbackOperations';
import { getFeed } from 'redux/feedback/feedbackSelector';
import { StyledList, StyledHeading, StyledMessage } from './Feedback.styled';

function Feedback() {
    const dispatch = useDispatch();
    const { feedback, isLoading } = useSelector(getFeed);

    useEffect(() => {
      dispatch(getAllFeedback())
    }, [dispatch])

  return (
    <>
      {isLoading && <LoaderRoute />}
      {!isLoading && feedback.length === 0  && <StyledHeading>
            Nothing to read for now, so your feedback can be the first one!
          </StyledHeading>}
      {!isLoading && feedback.length > 0 &&
        <StyledList>{feedback.map(({ id, name, email, message }) =>
          <li key={id}>
            <StyledHeading>{name}, {email}:</StyledHeading>
            <StyledMessage>{message}</StyledMessage>
          </li>)}
        </StyledList>
      }
    </>)
}

export default Feedback

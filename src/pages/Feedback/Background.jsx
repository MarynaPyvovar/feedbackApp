import React from 'react';
import { Wrapper, YellowDownDecorBall, DecorMap, PinkDecorBall, YellowUpDecorBall } from './Background.styled';

function Background({children}) {
  return (
      <Wrapper>
          {children}
        <DecorMap />
        <YellowDownDecorBall />
        <PinkDecorBall />
        <YellowUpDecorBall />
    </Wrapper>
  )
}

export default Background

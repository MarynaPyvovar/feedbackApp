import React from 'react';
import { Wrapper, YellowDownDecorBall, DecorMap, PinkDecorBall, YellowUpDecorBall, Cloud1, YellowTransparentBall, Cloud2,  Cloud3, Cloud4, Cloud5, Cloud6, Cloud7} from './Background.styled';

function Background({children}) {
  return (
    <Wrapper>
      {children}
      <DecorMap />
      <YellowDownDecorBall />
      <PinkDecorBall />
      <YellowUpDecorBall />
      <YellowTransparentBall />
      <Cloud1 />
      <Cloud2 />
      <Cloud3 />
      <Cloud4 />
      <Cloud5 />
      <Cloud6 />
      <Cloud7 />
    </Wrapper>
  )
}

export default Background

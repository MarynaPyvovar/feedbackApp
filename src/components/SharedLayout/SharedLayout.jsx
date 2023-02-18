import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, LoaderRoute } from 'components';
import { Wrapper, YellowDownDecorBall, DecorMap, PinkDecorBall, YellowUpDecorBall, Cloud1, YellowTransparentBall, Cloud2,  Cloud3, Cloud4, Cloud5, Cloud6, Cloud7} from './SharedLayout.styled';

function SharedLayout({children}) {
  return (
    <>
    <Wrapper>
        
      <Suspense fallback={<LoaderRoute />}>
        <Outlet />
      </Suspense>
        
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
      <Footer />
    </Wrapper>
    </>
  )
}

export default SharedLayout

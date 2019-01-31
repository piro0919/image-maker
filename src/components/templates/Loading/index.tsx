import Portal from 'components/templates/Portal';
import * as React from 'react';
import { DotLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledPortal = styled(Portal)`
  p {
    margin-top: 30px;
  }
`;

const Loading: React.SFC = () => (
  <StyledPortal>
    <DotLoader color="#234794" />
    <p>Generating... wait a minutes.</p>
  </StyledPortal>
);

export default Loading;

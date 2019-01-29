import * as React from 'react';
import { DotLoader } from 'react-spinners';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  p {
    margin-top: 30px;
  }
`;

const Loading: React.SFC = () => (
  <Div>
    <DotLoader color="#234794" />
    <p>Generating... wait a minutes.</p>
  </Div>
);

export default Loading;

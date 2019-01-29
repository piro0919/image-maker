import * as $ from 'jquery';
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

class Loading extends React.Component {
  componentDidMount() {
    $('#root > div:not(.portal)').css('filter', 'blur(2.5px)');
  }

  componentWillUnmount() {
    $('#root > div:not(.portal)').css('filter', 'blur(0)');
  }

  render() {
    return (
      <Div className="portal">
        <DotLoader color="#234794" />
        <p>Generating... wait a minutes.</p>
      </Div>
    );
  }
}

export default Loading;

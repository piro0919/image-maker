import * as $ from 'jquery';
import * as React from 'react';
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

  .wrapper {
    height: 360px;
    position: relative;
    width: 640px;

    img {
      height: 100%;
      width: 100%;
    }

    p {
      bottom: 80px;
      color: #ef64a0;
      font-size: 1.2em;
      position: absolute;
      right: 30px;
    }
  }
`;

export interface LogoProps {
  loading: number;
}

class Logo extends React.Component<LogoProps> {
  componentDidMount() {
    $('#root > div:not(.portal)').css('filter', 'blur(2.5px)');
  }

  componentWillUnmount() {
    $('#root > div:not(.portal)').css('filter', 'blur(0)');
  }

  render() {
    const { loading } = this.props;

    return (
      <Div className="portal">
        <div className="wrapper">
          <img src="/images/top.png" />
          <p>fonts loading... {loading}%</p>
        </div>
      </Div>
    );
  }
}

export default Logo;

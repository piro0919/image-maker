import Portal from 'components/templates/Portal';
import * as React from 'react';
import styled from 'styled-components';

const StyledPortal = styled(Portal)`
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

const Logo: React.SFC<LogoProps> = ({ loading }: LogoProps) => (
  <StyledPortal>
    <div className="wrapper">
      <img src={`${process.env.PUBLIC_URL}/images/top.png`} />
      <p>loading... {loading}%</p>
    </div>
  </StyledPortal>
);

export default Logo;

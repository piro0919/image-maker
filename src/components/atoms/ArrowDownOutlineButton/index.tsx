import * as React from 'react';
import { TiArrowUpOutline } from 'react-icons/ti';
import styled from 'styled-components';

const Button = styled.button`
  height: 100%;
  width: 100%;

  .icon {
    color: white;
    height: 100%;
    width: 100%;
  }
`;

const ArrowUpOutlineButton: React.SFC = () => (
  <Button>
    <TiArrowUpOutline className="icon" />
  </Button>
);

export default ArrowUpOutlineButton;

import * as React from 'react';
import { TiArrowDownOutline } from 'react-icons/ti';
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

const ArrowDownOutlineButton: React.SFC = () => (
  <Button>
    <TiArrowDownOutline className="icon" />
  </Button>
);

export default ArrowDownOutlineButton;

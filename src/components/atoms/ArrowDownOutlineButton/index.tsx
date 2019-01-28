import * as React from 'react';
import { TiArrowUpOutline } from 'react-icons/ti';
import styled from 'styled-components';

const Button = styled.button`
  height: 100%;
  width: 100%;

  &:disabled {
    opacity: 0.5;
  }

  .icon {
    color: white;
    height: 100%;
    width: 100%;
  }
`;

export interface ArrowUpOutlineButtonProps {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ArrowUpOutlineButton: React.SFC<ArrowUpOutlineButtonProps> = (
  props: ArrowUpOutlineButtonProps
) => (
  <Button {...props}>
    <TiArrowUpOutline className="icon" />
  </Button>
);

export default ArrowUpOutlineButton;

import * as React from 'react';
import { TiArrowDownOutline } from 'react-icons/ti';
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

export interface ArrowDownOutlineButtonProps {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ArrowDownOutlineButton: React.SFC<ArrowDownOutlineButtonProps> = (
  props: ArrowDownOutlineButtonProps
) => (
  <Button {...props}>
    <TiArrowDownOutline className="icon" />
  </Button>
);

export default ArrowDownOutlineButton;

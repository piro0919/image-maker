import * as React from 'react';
import { TiMinus } from 'react-icons/ti';
import styled from 'styled-components';

const Button = styled.button`
  height: 100%;
  width: 100%;

  &:disabled {
    opacity: 0.5;
  }

  .icon {
    color: black;
    height: 100%;
    width: 100%;
  }
`;

export interface MinusButtonProps {
  className?: string;
  disabled?: boolean;
  name?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MinusButton: React.SFC<MinusButtonProps> = (props: MinusButtonProps) => (
  <Button {...props}>
    <TiMinus className="icon" />
  </Button>
);

export default MinusButton;

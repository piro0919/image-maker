import * as React from 'react';
import { TiPlus } from 'react-icons/ti';
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

export interface PlusButtonProps {
  className?: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PlusButton: React.SFC<PlusButtonProps> = (props: PlusButtonProps) => (
  <Button {...props}>
    <TiPlus className="icon" />
  </Button>
);

export default PlusButton;

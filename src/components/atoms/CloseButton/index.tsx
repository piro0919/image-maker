import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    display: block;
    content: '';
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 100%;
  }

  &::after {
    height: 100%;
    width: 1px;
  }
`;

export interface CloseButtonProps {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CloseButton: React.SFC<CloseButtonProps> = (props: CloseButtonProps) => (
  <Button {...props} />
);

export default CloseButton;

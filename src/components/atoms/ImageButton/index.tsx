import * as React from 'react';
import { TiImage } from 'react-icons/ti';
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

export interface ImageButtonProps {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ImageButton: React.SFC<ImageButtonProps> = (props: ImageButtonProps) => (
  <Button {...props}>
    <TiImage className="icon" />
  </Button>
);

export default ImageButton;

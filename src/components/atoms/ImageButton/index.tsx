import * as React from 'react';
import { TiImage } from 'react-icons/ti';
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

export interface ImageButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ImageButton: React.SFC<ImageButtonProps> = ({
  onClick
}: ImageButtonProps) => (
  <Button onClick={onClick}>
    <TiImage className="icon" />
  </Button>
);

export default ImageButton;

import * as React from 'react';
import { TiDocument } from 'react-icons/ti';
import styled from 'styled-components';
import { string } from 'prop-types';

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

export interface DocumentButtonProps {
  className?: string;
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DocumentButton: React.SFC<DocumentButtonProps> = (
  props: DocumentButtonProps
) => (
  <Button {...props}>
    <TiDocument className="icon" />
  </Button>
);

export default DocumentButton;

import * as React from 'react';
import { TiDocumentDelete } from 'react-icons/ti';
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

export interface DocumentDeleteButtonProps {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DocumentDeleteButton: React.SFC<DocumentDeleteButtonProps> = (
  props: DocumentDeleteButtonProps
) => (
  <Button {...props}>
    <TiDocumentDelete className="icon" />
  </Button>
);

export default DocumentDeleteButton;

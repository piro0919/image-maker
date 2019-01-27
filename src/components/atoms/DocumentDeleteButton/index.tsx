import * as React from 'react';
import { TiDocumentDelete } from 'react-icons/ti';
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

export interface DocumentDeleteButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DocumentDeleteButton: React.SFC<DocumentDeleteButtonProps> = ({
  onClick
}: DocumentDeleteButtonProps) => (
  <Button onClick={onClick}>
    <TiDocumentDelete className="icon" />
  </Button>
);

export default DocumentDeleteButton;

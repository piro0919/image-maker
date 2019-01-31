import * as React from 'react';
import { TiDocumentAdd } from 'react-icons/ti';
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

export interface DocumentAddButtonProps {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DocumentAddButton: React.SFC<DocumentAddButtonProps> = (
  props: DocumentAddButtonProps
) => (
  <Button {...props}>
    <TiDocumentAdd className="icon" />
  </Button>
);

export default DocumentAddButton;

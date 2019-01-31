import * as React from 'react';
import { TiDownload } from 'react-icons/ti';
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

export interface DownloadButtonProps {
  className?: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DownloadButton: React.SFC<DownloadButtonProps> = (
  props: DownloadButtonProps
) => (
  <Button {...props}>
    <TiDownload className="icon" />
  </Button>
);

export default DownloadButton;

import DownloadButton from 'components/atoms/DownloadButton';
import Portal, { PortalProps } from 'components/templates/Portal';
import { saveAs } from 'file-saver';
import * as React from 'react';
import styled from 'styled-components';

const StyledPortal = styled(Portal)`
  img {
    max-height: 90%;
    max-width: 90%;
  }

  .download-button {
    bottom: 10px;
    height: 50px;
    position: fixed;
    right: 10px;
    width: 50px;
  }
`;

export interface ImageProps
  extends Required<Pick<PortalProps, 'onClickCloseButton'>> {
  extension: 'jpg' | 'png' | 'svg';
  fileName: string;
  src: string;
}

const Image: React.SFC<ImageProps> = ({
  extension,
  fileName,
  onClickCloseButton,
  src
}: ImageProps) => (
  <StyledPortal onClickCloseButton={onClickCloseButton}>
    <img src={src} />
    <DownloadButton
      className="download-button"
      onClick={() => {
        saveAs(src, `${fileName || 'image'}.${extension}`);
      }}
    />
  </StyledPortal>
);

export default Image;

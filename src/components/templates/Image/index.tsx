import CloseButton, { CloseButtonProps } from 'components/atoms/CloseButton';
import DownloadButton from 'components/atoms/DownloadButton';
import { saveAs } from 'file-saver';
import * as $ from 'jquery';
import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

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

  .close-button {
    height: 50px;
    position: fixed;
    right: 10px;
    top: 10px;
    width: 50px;
  }
`;

export interface ImageProps {
  extension: 'jpg' | 'png' | 'svg';
  onClickCloseButton: CloseButtonProps['onClick'];
  src: string;
}

class Image extends React.Component<ImageProps> {
  componentDidMount() {
    $('#root > div:not(.portal)').css('filter', 'blur(2.5px)');
  }

  componentWillUnmount() {
    $('#root > div:not(.portal)').css('filter', 'blur(0)');
  }

  render() {
    const { extension, onClickCloseButton, src } = this.props;

    return (
      <Div className="portal">
        <img src={src} />
        <DownloadButton
          className="download-button"
          onClick={() => {
            saveAs(src, `image.${extension}`);
          }}
        />
        <CloseButton className="close-button" onClick={onClickCloseButton} />
      </Div>
    );
  }
}

export default Image;

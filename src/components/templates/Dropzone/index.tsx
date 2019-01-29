import * as React from 'react';
import ReactDropzone, {
  DropzoneProps as ReactDropzoneProps
} from 'react-dropzone';
import styled from 'styled-components';

const Div = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  .wrapper {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;

    img {
      height: calc(231px / 3);
      opacity: 0.75;
      width: calc(289px / 3);
    }

    p {
      margin-top: 15px;
    }
  }

  .close-button {
    height: 50px;
    position: fixed;
    right: 10px;
    top: 10px;
    width: 50px;

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
  }
`;

export interface DropzoneProps {
  onClickCloseButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDrop: ReactDropzoneProps['onDrop'];
}

const Dropzone: React.SFC<DropzoneProps> = ({
  onClickCloseButton,
  onDrop
}: DropzoneProps) => (
  <Div>
    <ReactDropzone accept="image/*" onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className="wrapper">
          <input {...getInputProps()} />
          <img src="/images/dd.png" />
          <p>
            {isDragActive
              ? 'Drop files here...'
              : 'Try dropping some image files here, or click to select files to upload.'}
          </p>
        </div>
      )}
    </ReactDropzone>
    <button className="close-button" onClick={onClickCloseButton} />
  </Div>
);

export default Dropzone;

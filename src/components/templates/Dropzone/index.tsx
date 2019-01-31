import Portal, { PortalProps } from 'components/templates/Portal';
import * as React from 'react';
import ReactDropzone, {
  DropzoneProps as ReactDropzoneProps
} from 'react-dropzone';
import styled from 'styled-components';

const StyledPortal = styled(Portal)`
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
`;

export interface DropzoneProps
  extends Required<Pick<PortalProps, 'onClickCloseButton'>> {
  onDrop: ReactDropzoneProps['onDrop'];
}

const Dropzone: React.SFC<DropzoneProps> = ({
  onClickCloseButton,
  onDrop
}: DropzoneProps) => (
  <StyledPortal onClickCloseButton={onClickCloseButton}>
    <ReactDropzone accept="image/*" onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className="wrapper">
          <input {...getInputProps()} />
          <img src={`${process.env.PUBLIC_URL}/images/dd.png`} />
          <p>
            {isDragActive
              ? 'Drop files here...'
              : 'Try dropping some image files here, or click to select files to upload.'}
          </p>
        </div>
      )}
    </ReactDropzone>
  </StyledPortal>
);

export default Dropzone;

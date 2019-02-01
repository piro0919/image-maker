import ChromePicker, { ChromePickerProps } from 'components/atoms/ChromePicker';
import DocumentButton, {
  DocumentButtonProps
} from 'components/atoms/DocumentButton';
import Input from 'components/atoms/Input';
import Portal, { PortalProps } from 'components/templates/Portal';
import * as React from 'react';
import styled from 'styled-components';

const StyledPortal = styled(Portal)`
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 250px;

    dt:not(:first-child) {
      margin-top: 15px;
    }

    dd {
      display: flex;
      justify-content: flex-end;
      margin-top: 5px;

      .file-name {
        width: 150px;
      }

      .input {
        width: 50px;
      }
    }
  }

  .document-button {
    bottom: 10px;
    height: 50px;
    position: fixed;
    right: 10px;
    width: 50px;
  }
`;

export interface NewProps
  extends Required<Pick<PortalProps, 'onClickCloseButton'>> {
  backgroundColor: ChromePickerProps['color'];
  changePreviewIsInitialize: (value: boolean) => void;
  fileName: string;
  height: number;
  onChangePreviewBackgroundColor: ChromePickerProps['onChange'];
  onChangePreviewValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width: number;
}

const New: React.SFC<NewProps> = ({
  backgroundColor,
  changePreviewIsInitialize,
  fileName,
  height,
  onChangePreviewBackgroundColor,
  onChangePreviewValue,
  onClickCloseButton,
  width
}: NewProps) => (
  <StyledPortal onClickCloseButton={onClickCloseButton}>
    <dl className="wrapper">
      <dt>file-name</dt>
      <dd>
        <Input
          className="file-name"
          name="fileName"
          onChange={onChangePreviewValue}
          type="text"
          value={fileName}
        />
      </dd>
      <dt>width</dt>
      <dd>
        <Input
          className="input"
          min={1}
          name="width"
          onChange={onChangePreviewValue}
          type="number"
          value={width}
        />
        px
      </dd>
      <dt>height</dt>
      <dd>
        <Input
          className="input"
          min={1}
          name="height"
          onChange={onChangePreviewValue}
          type="number"
          value={height}
        />
        px
      </dd>
      <dt>background-color</dt>
      <dd>
        <ChromePicker
          color={backgroundColor}
          onChange={onChangePreviewBackgroundColor}
        />
      </dd>
    </dl>
    <DocumentButton
      className="document-button"
      disabled={!fileName || !height || !width}
      onClick={(e: ArgumentTypes<DocumentButtonProps['onClick']>[0]) => {
        changePreviewIsInitialize(true);
        onClickCloseButton(e);
      }}
    />
  </StyledPortal>
);

export default New;

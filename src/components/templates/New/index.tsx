import DocumentButton, {
  DocumentButtonProps
} from 'components/atoms/DocumentButton';
import Input from 'components/atoms/Input';
import Portal, { PortalProps } from 'components/templates/Portal';
import * as React from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import styled from 'styled-components';

const StyledPortal = styled(Portal)`
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 227px;

    dt:not(:first-child) {
      margin-top: 15px;
    }

    dd {
      display: flex;
      justify-content: flex-end;

      .input {
        width: 50px;
      }

      .picker .chrome-picker {
        background-color: #fff !important;
        border: 1px #ddd solid !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        font-family: inherit !important;

        > div {
          border-radius: 0 !important;
        }
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
  backgroundColor: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  changePreviewIsInitialize: (value: boolean) => void;
  height: number;
  onChangePreviewBackgroundColor: (color: ColorResult) => void;
  onChangePreviewValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width: number;
}

const New: React.SFC<NewProps> = ({
  backgroundColor,
  changePreviewIsInitialize,
  height,
  onChangePreviewBackgroundColor,
  onChangePreviewValue,
  onClickCloseButton,
  width
}: NewProps) => (
  <StyledPortal onClickCloseButton={onClickCloseButton}>
    <dl className="wrapper">
      <dt>width</dt>
      <dd>
        <Input
          className="input"
          onChange={onChangePreviewValue}
          min={1}
          name="width"
          type="number"
          value={width}
        />
        px
      </dd>
      <dt>height</dt>
      <dd>
        <Input
          className="input"
          onChange={onChangePreviewValue}
          min={1}
          name="height"
          type="number"
          value={height}
        />
        px
      </dd>
      <dt>background-color</dt>
      <dd>
        <div className="picker">
          <ChromePicker
            color={backgroundColor}
            onChange={onChangePreviewBackgroundColor}
          />
        </div>
      </dd>
    </dl>
    <DocumentButton
      className="document-button"
      disabled={!height || !width}
      onClick={(e: ArgumentTypes<DocumentButtonProps['onClick']>[0]) => {
        changePreviewIsInitialize(true);
        onClickCloseButton(e);
      }}
    />
  </StyledPortal>
);

export default New;

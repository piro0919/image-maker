import * as React from 'react';
import {
  ChromePicker as ReactColorChromePicker,
  ColorResult
} from 'react-color';
import styled from 'styled-components';

const Div = styled.div`
  .chrome-picker {
    background-color: #fff !important;
    border: 1px #ddd solid !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    font-family: inherit !important;

    > div {
      border-radius: 0 !important;
    }
  }
`;

export interface ChromePickerProps {
  className?: string;
  color: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  onChange: (color: ColorResult) => void;
}

const ChromePicker: React.SFC<ChromePickerProps> = ({
  className,
  ...props
}: ChromePickerProps) => (
  <Div className={className}>
    <ReactColorChromePicker {...props} />
  </Div>
);

export default ChromePicker;

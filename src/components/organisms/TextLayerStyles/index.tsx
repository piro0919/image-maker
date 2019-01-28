import Input from 'components/atoms/Input';
import * as React from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import Select from 'react-select';
import { Props } from 'react-select/lib/Select';
import styled from 'styled-components';

const Dl = styled.ul`
  dt:not(:first-child) {
    margin-top: 10px;
  }

  dd {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;

    .select {
      width: 200px;
    }

    .input {
      width: 75px;
    }

    .picker .chrome-picker {
      background-color: #fff;
      border: 1px #ddd solid;
      border-radius: 0 !important;
      box-shadow: none !important;
      font-family: inherit !important;

      > div {
        border-radius: 0 !important;
      }
    }
  }
`;

interface Font {
  fontFamily: string;
  name: string;
}

export interface TextLayerStylesProps {
  color: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  fontFamily: {
    label: string;
    value: string;
  };
  fonts: Font[];
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeColor: (color: ColorResult) => void;
  onChangeFontFamily: (value: ArgumentTypes<Props['onChange']>[0]) => void;
  rotate: number;
}

const TextLayerStyles: React.SFC<TextLayerStylesProps> = ({
  color,
  fontFamily,
  fonts,
  fontSize,
  fontWeight,
  lineHeight,
  onChange,
  onChangeColor,
  onChangeFontFamily,
  rotate
}: TextLayerStylesProps) => (
  <Dl>
    <dt>color</dt>
    <dd>
      <div className="picker">
        <ChromePicker color={color} onChange={onChangeColor} />
      </div>
    </dd>
    <dt>font-family</dt>
    <dd>
      <Select
        className="select"
        onChange={onChangeFontFamily}
        options={fonts.map(({ fontFamily: value, name: label }) => ({
          label,
          value
        }))}
        value={fontFamily}
      />
    </dd>
    <dt>font-size</dt>
    <dd>
      <Input
        className="input"
        min={0}
        name="fontSize"
        onChange={onChange}
        type="number"
        value={fontSize}
      />
      px
    </dd>
    <dt>font-weight</dt>
    <dd>
      <Input
        className="input"
        max={900}
        min={100}
        name="fontWeight"
        onChange={onChange}
        step={100}
        type="number"
        value={fontWeight}
      />
    </dd>
    <dt>line-height</dt>
    <dd>
      <Input
        className="input"
        min={0}
        name="lineHeight"
        onChange={onChange}
        type="number"
        value={lineHeight}
      />
      px
    </dd>
    <dt>rotate</dt>
    <dd>
      <Input
        className="input"
        name="rotate"
        onChange={onChange}
        step={0.1}
        type="number"
        value={rotate}
      />
      deg
    </dd>
  </Dl>
);

export default TextLayerStyles;

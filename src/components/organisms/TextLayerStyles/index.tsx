import Input from 'components/atoms/Input';
import LayerStyles from 'components/molecules/LayerStyles';
import * as React from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import Select from 'react-select';
import { Props } from 'react-select/lib/Select';
import styled from 'styled-components';

const StyledLayerStyles = styled(LayerStyles)`
  .select {
    width: 200px;
  }

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
  opacity: number;
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
  opacity,
  rotate
}: TextLayerStylesProps) => (
  <StyledLayerStyles>
    {[
      {
        name: 'color',
        node: (
          <div className="picker">
            <ChromePicker color={color} onChange={onChangeColor} />
          </div>
        )
      },
      {
        name: 'font-family',
        node: (
          <Select
            className="select"
            onChange={onChangeFontFamily}
            options={fonts.map(({ fontFamily: value, name: label }) => ({
              label,
              value
            }))}
            value={fontFamily}
          />
        )
      },
      {
        name: 'font-size',
        node: (
          <React.Fragment>
            <Input
              className="input"
              min={0}
              name="fontSize"
              onChange={onChange}
              type="number"
              value={fontSize}
            />
            px
          </React.Fragment>
        )
      },
      {
        name: 'font-weight',
        node: (
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
        )
      },
      {
        name: 'line-height',
        node: (
          <React.Fragment>
            <Input
              className="input"
              min={0}
              name="lineHeight"
              onChange={onChange}
              type="number"
              value={lineHeight}
            />
            px
          </React.Fragment>
        )
      },
      {
        name: 'opacity',
        node: (
          <Input
            className="input"
            max={1}
            min={0}
            name="opacity"
            onChange={onChange}
            step={0.01}
            type="number"
            value={opacity}
          />
        )
      },
      {
        name: 'rotate',
        node: (
          <React.Fragment>
            <Input
              className="input"
              name="rotate"
              onChange={onChange}
              step={0.1}
              type="number"
              value={rotate}
            />
            deg
          </React.Fragment>
        )
      }
    ]}
  </StyledLayerStyles>
);

export default TextLayerStyles;

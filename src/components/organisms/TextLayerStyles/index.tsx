import ChromePicker, { ChromePickerProps } from 'components/atoms/ChromePicker';
import Input from 'components/atoms/Input';
import LayerStyles from 'components/molecules/LayerStyles';
import TextShadow, { TextShadowProps } from 'components/molecules/TextShadow';
import * as React from 'react';
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

  .text-shadow {
    margin-top: 10px;
  }
`;

interface Font {
  fontFamily: string;
  name: string;
}

export interface TextLayerStylesProps
  extends Pick<ChromePickerProps, 'color'>,
    Pick<TextShadowProps, 'onChange'> {
  fontFamily: {
    label: string;
    value: string;
  };
  fonts: Font[];
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
  onChangeColor: (
    color: ArgumentTypes<ChromePickerProps['onChange']>[0],
    name: string
  ) => void;
  onChangeFontFamily: (value: ArgumentTypes<Props['onChange']>[0]) => void;
  opacity: number;
  rotate: number;
  textShadows: Pick<
    TextShadowProps,
    'blurRadius' | 'color' | 'hShadow' | 'vShadow'
  >[];
}

const TextLayerStyles: React.SFC<TextLayerStylesProps> = ({
  color,
  fontFamily,
  fonts,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  onChange,
  onChangeColor,
  onChangeFontFamily,
  opacity,
  rotate,
  textShadows
}: TextLayerStylesProps) => {
  const options = fonts.map(({ fontFamily: value, name: label }) => ({
    label,
    value
  }));
  const index = options.findIndex(
    font => JSON.stringify(fontFamily) === JSON.stringify(font)
  );

  return (
    <StyledLayerStyles>
      {[
        {
          name: 'color',
          node: (
            <ChromePicker
              color={color}
              onChange={color => onChangeColor(color, 'color')}
            />
          )
        },
        {
          name: 'font-family',
          node: (
            <Select
              className="select"
              onChange={onChangeFontFamily}
              options={options}
              value={options[index]}
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
          name: 'letter-spacing',
          node: (
            <React.Fragment>
              <Input
                className="input"
                name="letterSpacing"
                onChange={onChange}
                type="number"
                value={letterSpacing}
              />
              px
            </React.Fragment>
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
        },
        {
          name: 'text-shadow',
          node: textShadows.map((textShadow, index) => (
            <TextShadow
              {...textShadow}
              className="text-shadow"
              key={index}
              name={`textShadows[${index}]`}
              onChange={onChange}
              onChangeTextShadowColor={onChangeColor}
            />
          ))
        }
      ]}
    </StyledLayerStyles>
  );
};

export default TextLayerStyles;

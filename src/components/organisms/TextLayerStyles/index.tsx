import ChromePicker, { ChromePickerProps } from 'components/atoms/ChromePicker';
import MinusButton, { MinusButtonProps } from 'components/atoms/MinusButton';
import PlusButton, { PlusButtonProps } from 'components/atoms/PlusButton';
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

  .name {
    display: flex;
    justify-content: space-between;

    .plus-button {
      height: 14.4px;
      width: 14.4px;
    }
  }

  .node-list {
    width: 230px;

    > li {
      position: relative;

      &:not(:first-child) {
        border-top: 1px solid white;
        margin-top: 10px;
      }

      .minus-button {
        height: 14.4px;
        position: absolute;
        right: 0;
        top: 0;
        width: 14.4px;
      }
    }
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
  fontStyle: boolean;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
  onChangeColor: (
    color: ArgumentTypes<ChromePickerProps['onChange']>[0],
    name: string
  ) => void;
  onChangeFontFamily: (value: ArgumentTypes<Props['onChange']>[0]) => void;
  onClickAddTextShadow: PlusButtonProps['onClick'];
  onClickRemoveTextShadow: MinusButtonProps['onClick'];
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
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  onChange,
  onChangeColor,
  onChangeFontFamily,
  onClickAddTextShadow,
  onClickRemoveTextShadow,
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
          name: 'font-style',
          node: (
            <Input
              defaultChecked={fontStyle}
              name="fontStyle"
              onChange={onChange}
              type="checkbox"
            />
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
          name: (
            <div className="name">
              <p>text-shadow</p>
              <PlusButton
                className="plus-button"
                onClick={onClickAddTextShadow}
              />
            </div>
          ),
          node: (
            <ul className="node-list">
              {textShadows.map((textShadow, index) => (
                <li key={index}>
                  <MinusButton
                    className="minus-button"
                    name={index.toString()}
                    onClick={onClickRemoveTextShadow}
                  />
                  <TextShadow
                    {...textShadow}
                    className="text-shadow"
                    name={`textShadows[${index}]`}
                    onChange={onChange}
                    onChangeTextShadowColor={onChangeColor}
                  />
                </li>
              ))}
            </ul>
          )
        }
      ]}
    </StyledLayerStyles>
  );
};

export default TextLayerStyles;

import Input from 'components/atoms/Input';
import * as React from 'react';
import styled from 'styled-components';
import ChromePicker, { ChromePickerProps } from 'components/atoms/ChromePicker';

const Dl = styled.dl`
  .input {
    width: 50px;
  }
`;

export interface TextShadowProps {
  blurRadius: number;
  className?: string;
  color: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  hShadow: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextShadowColor: (
    color: ArgumentTypes<ChromePickerProps['onChange']>[0],
    name: string
  ) => void;
  vShadow: number;
}

const TextShadow: React.SFC<TextShadowProps> = ({
  blurRadius,
  className,
  color,
  hShadow,
  name,
  onChange,
  onChangeTextShadowColor,
  vShadow
}: TextShadowProps) => (
  <Dl className={className}>
    <dt>h-shadow</dt>
    <dd>
      <Input
        className="input"
        name={`${name}.hShadow`}
        onChange={onChange}
        step={0.1}
        type="number"
        value={hShadow}
      />
      px
    </dd>
    <dt>v-shadow</dt>
    <dd>
      <Input
        className="input"
        name={`${name}.vShadow`}
        onChange={onChange}
        step={0.1}
        type="number"
        value={vShadow}
      />
      px
    </dd>
    <dt>blur-radius</dt>
    <dd>
      <Input
        className="input"
        min={0}
        name={`${name}.blurRadius`}
        onChange={onChange}
        step={0.1}
        type="number"
        value={blurRadius}
      />
      px
    </dd>
    <dt>color</dt>
    <dd>
      <ChromePicker
        color={color}
        onChange={color => onChangeTextShadowColor(color, `${name}.color`)}
      />
    </dd>
  </Dl>
);

export default TextShadow;

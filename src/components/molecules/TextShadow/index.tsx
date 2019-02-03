import Input from 'components/atoms/Input';
import * as React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  .input {
    width: 50px;
  }
`;

export interface TextShadowProps {
  blurRadius: number;
  hShadow: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  vShadow: number;
}

const TextShadow: React.SFC<TextShadowProps> = ({
  blurRadius,
  hShadow,
  name,
  onChange,
  vShadow
}: TextShadowProps) => (
  <Ul>
    <li>
      <Input
        className="input"
        name={`${name}.hShadow`}
        onChange={onChange}
        step={0.1}
        type="number"
        value={hShadow}
      />
      px
    </li>
    <li>
      <Input
        className="input"
        name={`${name}.vShadow"`}
        onChange={onChange}
        step={0.1}
        type="number"
        value={vShadow}
      />
      px
    </li>
    <li>
      <Input
        className="input"
        name={`${name}.blurRadius`}
        onChange={onChange}
        step={0.1}
        type="number"
        value={blurRadius}
      />
      px
    </li>
  </Ul>
);

export default TextShadow;

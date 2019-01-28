import Input from 'components/atoms/Input';
import * as React from 'react';
import styled from 'styled-components';

const Dl = styled.ul`
  dt:not(:first-child) {
    margin-top: 10px;
  }

  dd {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;

    .input {
      width: 75px;
    }
  }
`;

export interface ImageLayerStylesProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  opacity: number;
  rotate: number;
  scale: number;
}

const ImageLayerStyles: React.SFC<ImageLayerStylesProps> = ({
  onChange,
  opacity,
  rotate,
  scale
}: ImageLayerStylesProps) => (
  <Dl>
    <dt>opacity</dt>
    <dd>
      <Input
        className="input"
        max={1}
        min={0}
        name="opacity"
        onChange={onChange}
        step={0.1}
        type="number"
        value={opacity}
      />
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
    <dt>scale</dt>
    <dd>
      <Input
        className="input"
        min={0}
        name="scale"
        onChange={onChange}
        step={0.01}
        type="number"
        value={scale}
      />
    </dd>
  </Dl>
);

export default ImageLayerStyles;

import Input from 'components/atoms/Input';
import LayerStyles from 'components/molecules/LayerStyles';
import * as React from 'react';
import styled from 'styled-components';

const StyledLayerStyles = styled(LayerStyles)`
  .input {
    width: 50px;
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
  <StyledLayerStyles>
    {[
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
        name: 'scale',
        node: (
          <Input
            className="input"
            min={0}
            name="scale"
            onChange={onChange}
            step={0.01}
            type="number"
            value={scale}
          />
        )
      }
    ]}
  </StyledLayerStyles>
);

export default ImageLayerStyles;

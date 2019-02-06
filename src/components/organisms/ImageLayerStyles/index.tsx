import Input from 'components/atoms/Input';
import LayerStyles from 'components/molecules/LayerStyles';
import * as React from 'react';
import styled from 'styled-components';

const StyledLayerStyles = styled(LayerStyles)`
  .input {
    width: 50px;
  }

  .filter-list {
    width: 230px;
  }
`;

export interface ImageLayerStylesProps {
  filter: {
    blur: number;
    brightness: number;
    contrast: number;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  opacity: number;
  rotate: number;
  scale: number;
}

const ImageLayerStyles: React.SFC<ImageLayerStylesProps> = ({
  filter,
  onChange,
  opacity,
  rotate,
  scale
}: ImageLayerStylesProps) => (
  <StyledLayerStyles>
    {[
      {
        name: 'filter',
        node: (
          <dl className="filter-list">
            <dt>blur</dt>
            <dd>
              <Input
                className="input"
                min={0}
                name="filter.blur"
                onChange={onChange}
                step={0.01}
                type="number"
                value={filter.blur}
              />
              px
            </dd>
            <dt>brightness</dt>
            <dd>
              <Input
                className="input"
                min={0}
                name="filter.brightness"
                onChange={onChange}
                step={0.01}
                type="number"
                value={filter.brightness}
              />
            </dd>
            <dt>contrast</dt>
            <dd>
              <Input
                className="input"
                min={0}
                name="filter.contrast"
                onChange={onChange}
                step={0.1}
                type="number"
                value={filter.contrast}
              />
              %
            </dd>
          </dl>
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

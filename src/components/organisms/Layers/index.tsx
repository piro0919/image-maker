import * as React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: grid;
  grid-gap: 5px;
  margin-bottom: 5px;
  width: 100%;

  li {
    border: 1px solid #ddd;
    padding: 2.5px;

    &.select {
      border: solid red 1px;
    }

    textarea {
      border: 1px solid #ddd;
      height: 50px;
      min-height: 50px;
      overflow-y: scroll;
      padding: 2.5px;
      width: 100%;
    }
  }
`;

interface Layer {
  value: string;
}

export interface LayersProps {
  index?: number;
  layers: Layer[];
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Layers: React.SFC<LayersProps> = ({
  index,
  layers,
  onChange,
  onFocus
}: LayersProps) => (
  <Ul>
    {layers
      .map(({ value }, layerIndex) => (
        <li className={index === layerIndex ? 'select' : ''} key={layerIndex}>
          <textarea
            data-index={layerIndex}
            onChange={onChange}
            onFocus={onFocus}
            value={value}
          />
        </li>
      ))
      .reverse()}
  </Ul>
);

export default Layers;

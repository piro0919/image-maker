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

    .image {
      background-position: center;
      background-size: cover;
      height: 50px;
      overflow: hidden;
      padding: 2.5px;
      width: 100%;
    }
  }
`;

interface ImageLayer {
  url: string;
}

interface TextLayer {
  value: string;
}

export interface LayersProps {
  index?: number;
  layers: (ImageLayer | TextLayer)[];
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Layers: React.SFC<LayersProps> = ({
  index,
  layers,
  onChange,
  onClick,
  onFocus
}: LayersProps) => (
  <Ul>
    {layers
      .map((layer, layerIndex) => {
        let v = <React.Fragment />;

        if ('value' in layer) {
          const { value } = layer;

          v = (
            <textarea
              data-index={layerIndex}
              onChange={onChange}
              onFocus={onFocus}
              value={value}
            />
          );
        } else if ('url' in layer) {
          const { url } = layer;

          v = (
            <div
              className="image"
              data-index={layerIndex}
              onClick={onClick}
              style={{ backgroundImage: `url(${url})` }}
            />
          );
        }

        return (
          <li className={index === layerIndex ? 'select' : ''} key={layerIndex}>
            {v}
          </li>
        );
      })
      .reverse()}
  </Ul>
);

export default Layers;

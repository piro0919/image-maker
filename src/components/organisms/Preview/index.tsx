import ImagePreview, {
  ImagePreviewProps
} from 'components/molecules/ImagePreview';
import TextPreview, {
  TextPreviewProps
} from 'components/molecules/TextPreview';
import * as React from 'react';
import ReactScalableDraggable from 'react-scalable-draggable';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #bbb;
  height: 100%;
  overflow: scroll;
  position: relative;
  width: 100%;

  .wrapper {
    box-sizing: content-box;
    left: 0;
    padding: 50px;
    position: absolute;
    top: 0;
    transform-origin: top left;

    #capture {
      height: inherit;
      width: inherit;

      .screen {
        background-color: white;
        height: inherit;
        position: relative;
        width: inherit;

        &::before {
          background-image: url(${process.env.PUBLIC_URL}/images/grid.png);
          background-repeat: repeat;
          background-size: inherit;
          content: '';
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .draggable {
          cursor: move;
          position: absolute;
          word-break: keep-all;
        }
      }
    }
  }
`;

export interface PreviewProps {
  layers: (ImagePreviewProps | TextPreviewProps)[];
  preview: {
    gridSize: number;
    height: number;
    overflow: boolean;
    scale: number;
    width: number;
  };
}

const Preview: React.SFC<PreviewProps> = ({
  layers,
  preview: { gridSize, height, overflow, scale, width }
}) => {
  const previews = layers.map(layer => {
    const { id } = layer;

    let node = <React.Fragment />;

    if ('value' in layer) {
      node = <TextPreview {...layer} />;
    } else if ('url' in layer) {
      node = <ImagePreview {...layer} />;
    }

    return (
      <ReactScalableDraggable
        className="draggable"
        key={id}
        parentScale={scale}
      >
        {node}
      </ReactScalableDraggable>
    );
  });

  return (
    <Div id="preview">
      <div
        className="wrapper"
        style={{
          height: `${height}px`,
          transform: `scale(${scale})`,
          width: `${width}px`
        }}
      >
        <div id="capture">
          <div
            className="screen"
            style={{
              backgroundSize: `${gridSize}px`,
              overflow: overflow ? 'visible' : 'hidden'
            }}
          >
            {previews}
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Preview;

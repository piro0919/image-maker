import ImagePreview, {
  ImagePreviewProps
} from 'components/molecules/ImagePreview';
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

    #test {
      height: inherit;
      width: inherit;

      .screen {
        background-color: white;
        height: inherit;
        position: relative;
        width: inherit;

        .draggable {
          cursor: move;
          position: absolute;
          word-break: keep-all;
        }
      }
    }
  }
`;

interface TextLayer {
  style: {
    color: {
      a: number;
      b: number;
      g: number;
      r: number;
    };
    fontFamily: {
      label: string;
      value: string;
    };
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    rotate: number;
  };
  value: string;
}

export interface PreviewProps {
  layers: (ImagePreviewProps | TextLayer)[];
  preview: {
    height: number;
    overflow: boolean;
    scale: number;
    width: number;
  };
}

const Preview: React.SFC<PreviewProps> = ({
  layers,
  preview: { height, overflow, scale, width }
}) => {
  const previews = layers.map((layer, index) => {
    const layerList = [];

    if ('value' in layer) {
      const {
        style: {
          color: { a, b, g, r },
          fontFamily: { value: fontFamily },
          fontSize,
          lineHeight,
          rotate,
          ...style
        },
        value
      } = layer;

      value.split(/\r\n|\r|\n/).forEach((v, index) => {
        layerList.push(
          <div
            key={index}
            style={{
              fontFamily,
              color: `rgba(${r}, ${g}, ${b}, ${a})`,
              fontSize: `${fontSize}px`,
              height: `${lineHeight}px`,
              lineHeight: `${lineHeight}px`,
              transform: `rotate(${rotate}deg)`,
              ...style
            }}
          >
            {v}
          </div>
        );
      });
    } else if ('url' in layer) {
      const { style, url } = layer;

      layerList.push(<ImagePreview style={style} url={url} />);
    }

    return (
      <ReactScalableDraggable
        className="draggable"
        key={index}
        parentScale={scale}
      >
        {layerList}
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
        <div id="test">
          <div
            className="screen"
            style={{ overflow: overflow ? 'visible' : 'hidden' }}
          >
            {previews}
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Preview;

import * as $ from 'jquery';
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
    left: 0;
    padding: 50px 0 0 50px;
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

interface Layer {
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
  };
  value: string;
}

export interface PreviewProps {
  layers: Layer[];
  preview: {
    height: number;
    overflow: boolean;
    scale: number;
    width: number;
  };
}

class Preview extends React.Component<PreviewProps> {
  componentDidUpdate({
    preview: { height: prevHeight, scale: prevScale, width: prevWidth }
  }: PreviewProps) {
    const {
      preview: { height, scale, width }
    } = this.props;

    if (prevHeight !== height || prevScale !== scale || prevWidth !== width) {
      // TODO: スクロールを中央にしたい
    }
  }

  render() {
    const {
      layers,
      preview: { height, overflow, scale, width }
    } = this.props;
    const previews = layers.map(
      (
        {
          style: {
            color: { a, b, g, r },
            fontFamily: { value: fontFamily },
            fontSize,
            lineHeight,
            ...style
          },
          value
        },
        index
      ) => (
        <ReactScalableDraggable
          className="draggable"
          key={index}
          parentScale={scale}
        >
          {value.split(/\r\n|\r|\n/).map((v, index) => (
            <div
              key={index}
              style={{
                fontFamily,
                color: `rgba(${r}, ${g}, ${b}, ${a})`,
                fontSize: `${fontSize}px`,
                height: `${lineHeight}px`,
                lineHeight: `${lineHeight}px`,
                ...style
              }}
            >
              {v}
            </div>
          ))}
        </ReactScalableDraggable>
      )
    );

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
  }
}

export default Preview;

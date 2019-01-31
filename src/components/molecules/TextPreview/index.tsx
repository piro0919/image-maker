import * as React from 'react';
import styled from 'styled-components';

interface DivProps {
  fontFamily: string;
}

const Div = styled.div`
  @font-face {
    font-family: '${({ fontFamily }: DivProps) => fontFamily}';
    src: url('${process.env.PUBLIC_URL}/fonts/${({ fontFamily }: DivProps) =>
  fontFamily}.woff2') format('woff2'),
      url('${process.env.PUBLIC_URL}/fonts/${({ fontFamily }: DivProps) =>
  fontFamily}.woff') format('woff'),
      url('${process.env.PUBLIC_URL}/fonts/${({ fontFamily }: DivProps) =>
  fontFamily}.ttf') format('truetype');
  }

  white-space: nowrap;
`;

export interface TextPreviewProps {
  id: string;
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
    opacity: number;
    rotate: number;
  };
  value: string;
}

const TextPreview: React.SFC<TextPreviewProps> = ({
  style: {
    color: { a, b, g, r },
    fontFamily: { value: fontFamily },
    fontSize,
    fontWeight,
    lineHeight,
    opacity,
    rotate
  },
  value
}: TextPreviewProps) => (
  <Div
    fontFamily={fontFamily}
    style={{
      fontFamily,
      fontWeight,
      opacity,
      color: `rgba(${r}, ${g}, ${b}, ${a})`,
      fontSize: `${fontSize}px`,
      transform: `rotate(${rotate}deg)`
    }}
  >
    {value.split(/\r\n|\r|\n/).map((v, index) => (
      <div
        key={index}
        style={{
          height: `${lineHeight}px`,
          lineHeight: `${lineHeight}px`
        }}
      >
        {v}
      </div>
    ))}
  </Div>
);

export default TextPreview;

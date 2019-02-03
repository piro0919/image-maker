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

interface TextShadow {
  blurRadius: number;
  color: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  hShadow: number;
  vShadow: number;
}

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
    letterSpacing: number;
    lineHeight: number;
    opacity: number;
    rotate: number;
    textShadows: TextShadow[];
  };
  value: string;
}

const TextPreview: React.SFC<TextPreviewProps> = ({
  style: {
    color: { a, b, g, r },
    fontFamily: { value: fontFamily },
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    opacity,
    rotate,
    textShadows
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
      letterSpacing: `${letterSpacing}px`,
      textShadow: textShadows
        .map(
          ({
            blurRadius,
            color: {
              a: textShadowA,
              b: textShadowB,
              g: textShadowG,
              r: textShadowR
            },
            hShadow,
            vShadow
          }) =>
            `${hShadow}px ${vShadow}px ${blurRadius}px rgba(${textShadowR}, ${textShadowG}, ${textShadowB}, ${textShadowA})`
        )
        .join(' '),
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

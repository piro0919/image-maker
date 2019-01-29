import * as React from 'react';

export interface TextPreviewProps {
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

const TextPreview: React.SFC<TextPreviewProps> = ({
  style: {
    color: { a, b, g, r },
    fontFamily: { value: fontFamily },
    fontSize,
    fontWeight,
    lineHeight,
    rotate
  },
  value
}: TextPreviewProps) => (
  <div
    style={{
      fontFamily,
      fontWeight,
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
  </div>
);

export default TextPreview;

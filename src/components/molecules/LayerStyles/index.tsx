import * as React from 'react';
import styled from 'styled-components';

const Dl = styled.dl`
  > div {
    padding: 10px 10px;

    &:hover {
      background-color: rgba(35, 71, 148, 0.1);
    }
  }

  dd {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
`;

interface Child {
  name: React.ReactNode;
  node: React.ReactNode;
}

export interface LayerStylesProps {
  children: Child[];
  className?: string;
}

const LayerStyles: React.SFC<LayerStylesProps> = ({
  children,
  className
}: LayerStylesProps) => (
  <Dl className={className}>
    {children.map(({ name, node }, index) => (
      <div key={index}>
        <dt>{name}</dt>
        <dd>{node}</dd>
      </div>
    ))}
  </Dl>
);

export default LayerStyles;

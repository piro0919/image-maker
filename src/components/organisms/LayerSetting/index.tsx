import * as React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  background-color: #bbb;
  display: grid;
  grid-auto-rows: 25px;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, 25px);
  padding: 5px;
  width: 100%;

  li {
    height: 100%;
    width: 100%;

    button {
      height: 100%;
      width: 100%;

      .icon {
        color: white;
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export interface LayerSettingProps {
  children: React.ReactNodeArray;
}

const LayerSetting: React.SFC<LayerSettingProps> = ({
  children
}: LayerSettingProps) => (
  <Ul>
    {children.map((value, index) => (
      <li key={index}>{value}</li>
    ))}
  </Ul>
);

export default LayerSetting;

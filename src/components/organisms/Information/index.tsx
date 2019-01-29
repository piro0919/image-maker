import Input, { InputProps } from 'components/atoms/Input';
import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  display: flex;

  dl {
    align-items: center;
    display: flex;

    dt:not(:first-child) {
      margin-left: 10px;
    }

    dd {
      align-items: center;
      display: flex;
      margin-left: 5px;

      .input {
        width: 60px;
      }
    }
  }
`;

export interface InformationProps {
  gridSize: number;
  height: number;
  onChange: InputProps['onChange'];
  overflow: boolean;
  scale: number;
  width: number;
}

const Information: React.SFC<InformationProps> = ({
  gridSize,
  height,
  onChange,
  overflow,
  scale,
  width
}: InformationProps) => (
  <Div>
    <dl>
      <dt>width</dt>
      <dd>
        <Input
          className="input"
          min={0}
          name="width"
          onChange={onChange}
          type="number"
          value={width}
        />
        px
      </dd>
      <dt>height</dt>
      <dd>
        <Input
          className="input"
          min={0}
          name="height"
          onChange={onChange}
          type="number"
          value={height}
        />
        px
      </dd>
      <dt>scale</dt>
      <dd>
        <Input
          className="input"
          min={0}
          name="scale"
          onChange={onChange}
          step={0.1}
          type="number"
          value={scale}
        />
        px
      </dd>
      <dt>grid-size</dt>
      <dd>
        <Input
          className="input"
          max={500}
          min={0}
          name="gridSize"
          onChange={onChange}
          type="number"
          value={gridSize}
        />
        px
      </dd>
      <dt>overflow</dt>
      <dd>
        <Input
          defaultChecked={overflow}
          name="overflow"
          onChange={onChange}
          type="checkbox"
        />
      </dd>
    </dl>
  </Div>
);

export default Information;

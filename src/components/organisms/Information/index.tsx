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
        width: 75px;
      }
    }
  }
`;

export interface InformationProps {
  height: number;
  onChange: InputProps['onChange'];
  overflow: boolean;
  scale: number;
  width: number;
}

const Information: React.SFC<InformationProps> = ({
  height,
  onChange,
  overflow,
  scale,
  width
}: InformationProps) => {
  console.log(overflow);

  return (
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
};

export default Information;

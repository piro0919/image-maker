import Input, { InputProps } from 'components/atoms/Input';
import * as React from 'react';
import { ChromePicker, ColorResult } from 'react-color';
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

      .background-color {
        border: 1px #ddd solid;
        display: flex;
        height: 15px;
        justify-content: center;
        position: relative;
        width: 15px;

        &:hover .picker {
          display: block;
        }

        .picker {
          background-color: #fff;
          border: 1px #ddd solid;
          bottom: 100%;
          display: none;
          padding: 10px;
          position: absolute;

          .chrome-picker {
            background-color: inherit !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            font-family: inherit !important;

            > div {
              border-radius: 0 !important;
            }
          }
        }
      }
    }
  }
`;

export interface InformationProps {
  backgroundColor: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  gridSize: number;
  height: number;
  onChange: InputProps['onChange'];
  onChangeBackgroundColor: (color: ColorResult) => void;
  overflow: boolean;
  scale: number;
  width: number;
}

const Information: React.SFC<InformationProps> = ({
  backgroundColor,
  gridSize,
  height,
  onChange,
  onChangeBackgroundColor,
  overflow,
  scale,
  width
}: InformationProps) => {
  const { a, b, g, r } = backgroundColor;

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
        <dt>background-color</dt>
        <dd>
          <div
            className="background-color"
            style={{ backgroundColor: `rgba(${r},${g}, ${b},${a})` }}
          >
            <div className="picker">
              <ChromePicker
                color={backgroundColor}
                onChange={onChangeBackgroundColor}
              />
            </div>
          </div>
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

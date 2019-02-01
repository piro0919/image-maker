import ChromePicker, { ChromePickerProps } from 'components/atoms/ChromePicker';
import Input, { InputProps } from 'components/atoms/Input';
import * as React from 'react';
import styled from 'styled-components';

const Dl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-top: -5px;

  > div {
    align-items: center;
    display: flex;
    margin-left: 5px;
    margin-top: 5px;

    dd {
      align-items: center;
      display: flex;
      margin-left: 5px;

      .input {
        width: 50px;
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

          > div {
            border: none !important;
          }
        }
      }
    }
  }
`;

export interface InformationProps {
  backgroundColor: ChromePickerProps['color'];
  gridSize: number;
  height: number;
  isInitialize: boolean;
  onChange: InputProps['onChange'];
  onChangeBackgroundColor: ChromePickerProps['onChange'];
  overflow: boolean;
  scale: number;
  width: number;
}

const Information: React.SFC<InformationProps> = ({
  backgroundColor,
  gridSize,
  height,
  isInitialize,
  onChange,
  onChangeBackgroundColor,
  overflow,
  scale,
  width
}: InformationProps) => {
  const { a, b, g, r } = backgroundColor;

  return (
    <Dl>
      {isInitialize && (
        <React.Fragment>
          <div>
            <dt>width</dt>
            <dd>
              <Input
                className="input"
                min={1}
                name="width"
                onChange={onChange}
                type="number"
                value={width}
              />
              px
            </dd>
          </div>
          <div>
            <dt>height</dt>
            <dd>
              <Input
                className="input"
                min={1}
                name="height"
                onChange={onChange}
                type="number"
                value={height}
              />
              px
            </dd>
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <dt>background-color</dt>
            <dd>
              <div
                className="background-color"
                style={{ backgroundColor: `rgba(${r},${g}, ${b},${a})` }}
              >
                <ChromePicker
                  className="picker"
                  color={backgroundColor}
                  onChange={onChangeBackgroundColor}
                />
              </div>
            </dd>
          </div>
          <div>
            <dt>overflow</dt>
            <dd>
              <Input
                defaultChecked={overflow}
                name="overflow"
                onChange={onChange}
                type="checkbox"
              />
            </dd>
          </div>
        </React.Fragment>
      )}
    </Dl>
  );
};

export default Information;

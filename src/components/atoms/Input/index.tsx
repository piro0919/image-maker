import * as React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #fff;
  border: 1px #ddd solid;

  &[type='checkbox'] {
    height: 15px;
    width: 15px;

    &:checked {
      background-color: #bbb;
    }
  }

  &[type='number'] {
    text-align: right;
  }
`;

export interface InputProps {
  defaultChecked?: boolean;
  className?: string;
  max?: number;
  min?: number;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  type: string;
  value?: number | string;
}

const Input: React.SFC<InputProps> = (props: InputProps) => (
  <StyledInput {...props} />
);

export default Input;

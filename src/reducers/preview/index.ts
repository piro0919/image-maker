import changeValue from 'actions/preview/changeValue';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface PreviewState {
  backgroundColor: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  gridSize: number;
  height: number;
  isInitialize: boolean;
  overflow: boolean;
  scale: number;
  width: number;
}

const initialState: PreviewState = {
  backgroundColor: {
    a: 1,
    b: 255,
    g: 255,
    r: 255
  },
  gridSize: 0,
  height: 1,
  isInitialize: false,
  overflow: false,
  scale: 1,
  width: 1
};

const preview = reducerWithInitialState(initialState).case(
  changeValue,
  (state, { name, value: newValue }) => {
    let value;

    if (name === 'gridSize' || name === 'height' || name === 'width') {
      value = parseInt(newValue as string, 10);
    } else if (name === 'scale') {
      value = parseFloat(newValue as string);
    } else {
      value = newValue;
    }

    return { ...state, ...{ [name]: value } };
  }
);

export default preview;

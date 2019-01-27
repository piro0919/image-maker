import changeValue from 'actions/preview/changeValue';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface PreviewState {
  height: number;
  overflow: boolean;
  scale: number;
  width: number;
}

const initialState: PreviewState = {
  height: 300,
  overflow: true,
  scale: 1,
  width: 400
};

const preview = reducerWithInitialState(initialState).case(
  changeValue,
  (state, { name, value: newValue }) => {
    let value;

    if (name === 'height' || name === 'width') {
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

import setFonts from 'actions/fonts/setFonts';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

interface Font {
  fontFamily: string;
  name: string;
}

export interface FontsState {
  fonts: Font[];
}

const initialState: FontsState = {
  fonts: []
};

const fonts = reducerWithInitialState(initialState).case(
  setFonts,
  (state, { fonts }) => ({ ...state, fonts })
);

export default fonts;

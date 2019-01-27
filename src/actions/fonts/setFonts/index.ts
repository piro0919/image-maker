import actionCreatorFactory from 'typescript-fsa';

interface Font {
  fontFamily: string;
  name: string;
}

const actionCreator = actionCreatorFactory();
const setFonts = actionCreator<{ fonts: Font[] }>('FONTS.SET_FONTS');

export default setFonts;

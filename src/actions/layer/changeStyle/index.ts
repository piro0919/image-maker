import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const changeStyle = actionCreator<{ name: string; value: any }>(
  'LAYER.CHANGE_STYLE'
);

export default changeStyle;

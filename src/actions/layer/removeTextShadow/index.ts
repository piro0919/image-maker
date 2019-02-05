import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const removeTextShadow = actionCreator<{ index: number }>(
  'LAYER.REMOVE_TEXT_SHADOW'
);

export default removeTextShadow;

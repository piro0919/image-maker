import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const addTextShadow = actionCreator('LAYER.ADD_TEXT_SHADOW');

export default addTextShadow;

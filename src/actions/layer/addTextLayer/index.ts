import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const addTextLayer = actionCreator('LAYER.ADD_TEXT_LAYER');

export default addTextLayer;

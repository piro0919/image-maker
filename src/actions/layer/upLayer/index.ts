import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const upLayer = actionCreator('LAYER.UP_LAYER');

export default upLayer;

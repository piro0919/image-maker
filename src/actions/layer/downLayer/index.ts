import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const downLayer = actionCreator('LAYER.DOWN_LAYER');

export default downLayer;

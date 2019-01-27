import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const addLayer = actionCreator('LAYER.ADD_LAYER');

export default addLayer;

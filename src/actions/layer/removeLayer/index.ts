import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const removeLayer = actionCreator('LAYER.REMOVE_LAYER');

export default removeLayer;

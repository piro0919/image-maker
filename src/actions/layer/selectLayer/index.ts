import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const selectLayer = actionCreator<{ index: number }>('LAYER.SELECT_LAYER');

export default selectLayer;

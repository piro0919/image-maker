import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const addImageLayer = actionCreator<{ url: string }>('LAYER.ADD_IMAGE_LAYER');

export default addImageLayer;

import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const changeValue = actionCreator<{ value: string }>('LAYER.CHANGE_VALUE');

export default changeValue;

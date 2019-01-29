import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const changeValue = actionCreator<{ name: string; value: any }>(
  'PREVIEW.CHANGE_VALUE'
);

export default changeValue;

import { combineReducers } from 'redux';
import fonts, { FontsState } from './fonts';
import layer, { LayerState } from './layer';
import preview, { PreviewState } from './preview';

export interface State {
  fonts: FontsState;
  layer: LayerState;
  preview: PreviewState;
}

const reducers = () => combineReducers({ fonts, layer, preview });

export default reducers;

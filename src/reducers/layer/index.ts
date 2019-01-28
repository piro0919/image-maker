import addImageLayer from 'actions/layer/addImageLayer';
import addTextLayer from 'actions/layer/addTextLayer';
import changeStyle from 'actions/layer/changeStyle';
import changeValue from 'actions/layer/changeValue';
import downLayer from 'actions/layer/downLayer';
import removeLayer from 'actions/layer/removeLayer';
import selectLayer from 'actions/layer/selectLayer';
import upLayer from 'actions/layer/upLayer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

interface ImageLayer {
  style: {
    opacity: number;
    rotate: number;
    scale: number;
  };
  url: string;
}

interface TextLayer {
  style: {
    color: {
      a: number;
      b: number;
      g: number;
      r: number;
    };
    fontFamily: {
      label: string;
      value: string;
    };
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    opacity: number;
    rotate: number;
  };
  value: string;
}

export interface LayerState {
  index?: number;
  layers: (ImageLayer | TextLayer)[];
}

const initialState: LayerState = {
  index: undefined,
  layers: []
};

const layer = reducerWithInitialState(initialState)
  .case(addImageLayer, (state, { url }) => {
    const { layers: oldLayers } = state;
    const layers = oldLayers.slice();

    layers.push({
      url,
      style: {
        opacity: 1,
        rotate: 0,
        scale: 1
      }
    });

    return { ...state, layers };
  })
  .case(addTextLayer, state => {
    const { layers: oldLayers } = state;
    const layers = oldLayers.slice();

    layers.push({
      style: {
        color: {
          a: 1,
          b: 0,
          g: 0,
          r: 0
        },
        fontFamily: {
          label: '機械彫刻用標準書体 M',
          value: 'KikaiChokokuJIS-Md'
        },
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 16,
        opacity: 1,
        rotate: 0
      },
      value: ''
    });

    return { ...state, layers };
  })
  .case(changeStyle, (state, { name, value }) => {
    const { index, layers: oldLayers } = state;
    const layers = oldLayers.slice();

    if (name === 'fontSize' || name === 'fontWeight' || name === 'lineHeight') {
      layers[index].style[name] = parseInt(value, 10);
    } else if (name === 'opacity' || name === 'rotate' || name === 'scale') {
      layers[index].style[name] = parseFloat(value);
    } else {
      layers[index].style[name] = value;
    }

    return { ...state, layers };
  })
  .case(changeValue, (state, { value }) => {
    const { index, layers: oldLayers } = state;
    const layers = oldLayers.slice();
    const layer = layers[index];

    if ('value' in layer) {
      layer.value = value;

      layers[index] = layer;
    }

    return { ...state, layers };
  })
  .case(downLayer, state => {
    const { index, layers: oldLayers } = state;
    const layers = oldLayers.slice();
    const tmpLayer = layers[index];

    layers[index] = layers[index - 1];
    layers[index - 1] = tmpLayer;

    return { ...state, layers };
  })
  .case(removeLayer, state => {
    const { index, layers: prevLayers } = state;

    if (index === undefined) {
      return state;
    }

    const layers = prevLayers.slice();

    layers.splice(index, 1);

    return {
      layers,
      index: undefined
    };
  })
  .case(selectLayer, (state, { index }) => ({ ...state, index }))
  .case(upLayer, state => {
    const { index, layers: oldLayers } = state;
    const layers = oldLayers.slice();
    const tmpLayer = layers[index];

    layers[index] = layers[index + 1];
    layers[index + 1] = tmpLayer;

    return { ...state, layers };
  });

export default layer;

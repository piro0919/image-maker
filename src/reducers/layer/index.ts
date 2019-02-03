import addImageLayer from 'actions/layer/addImageLayer';
import addTextLayer from 'actions/layer/addTextLayer';
import changeStyle from 'actions/layer/changeStyle';
import changeValue from 'actions/layer/changeValue';
import downLayer from 'actions/layer/downLayer';
import removeLayer from 'actions/layer/removeLayer';
import selectLayer from 'actions/layer/selectLayer';
import upLayer from 'actions/layer/upLayer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as uniqid from 'uniqid';

interface ImageLayer {
  id: string;
  style: {
    opacity: number;
    rotate: number;
    scale: number;
  };
  url: string;
}

interface TextShadow {
  blurRadius: number;
  color: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
  hShadow: number;
  vShadow: number;
}

interface TextLayer {
  id: string;
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
    letterSpacing: number;
    lineHeight: number;
    opacity: number;
    rotate: number;
    textShadows: TextShadow[];
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
    const { layers: prevLayers } = state;
    const layers = prevLayers.slice();

    layers.push({
      url,
      id: uniqid(),
      style: {
        opacity: 1,
        rotate: 0,
        scale: 1
      }
    });

    return { ...state, layers, index: layers.length - 1 };
  })
  .case(addTextLayer, state => {
    const { layers: prevLayers } = state;
    const layers = prevLayers.slice();

    layers.push({
      id: uniqid(),
      style: {
        color: {
          a: 1,
          b: 0,
          g: 0,
          r: 0
        },
        fontFamily: {
          label: 'M+ P Type-1 Regular',
          value: 'mplus-1p-regular'
        },
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 16,
        opacity: 1,
        rotate: 0,
        textShadows: [
          {
            blurRadius: 0,
            color: {
              a: 0,
              b: 0,
              g: 0,
              r: 0
            },
            hShadow: 0,
            vShadow: 0
          }
        ]
      },
      value: ''
    });

    return { ...state, layers, index: layers.length - 1 };
  })
  .case(changeStyle, (state, { name, value }) => {
    const { index, layers: prevLayers } = state;
    const layers = prevLayers.slice();

    if (name === 'opacity' || name === 'rotate' || name === 'scale') {
      layers[index].style[name] = parseFloat(value);
    } else {
      layers[index].style[name] = value;
    }

    return { ...state, layers };
  })
  .case(changeValue, (state, { value }) => {
    const { index, layers: prevLayers } = state;
    const layers = prevLayers.slice();
    const layer = layers[index];

    if ('value' in layer) {
      layer.value = value;

      layers[index] = layer;
    }

    return { ...state, layers };
  })
  .case(downLayer, state => {
    const { index, layers: prevLayers } = state;
    const layers = prevLayers.slice();
    const tmpLayer = layers[index];

    layers[index] = layers[index - 1];
    layers[index - 1] = tmpLayer;

    return { ...state, index: index - 1, layers };
  })
  .case(removeLayer, state => {
    const { index: prevIndex, layers: prevLayers } = state;
    const layers = prevLayers.slice();

    let index = undefined;

    layers.splice(prevIndex, 1);

    if (index - 1 >= 0) {
      index = index - 1;
    } else if (layers.length) {
      index = 0;
    }

    return {
      index,
      layers
    };
  })
  .case(selectLayer, (state, { index }) => ({ ...state, index }))
  .case(upLayer, state => {
    const { index, layers: prevLayers } = state;
    const layers = prevLayers.slice();
    const tmpLayer = layers[index];

    layers[index] = layers[index + 1];
    layers[index + 1] = tmpLayer;

    return { ...state, index: index + 1, layers };
  });

export default layer;

import setFonts from 'actions/fonts/setFonts';
import addImageLayer from 'actions/layer/addImageLayer';
import addTextLayer from 'actions/layer/addTextLayer';
import changeStyle from 'actions/layer/changeStyle';
import changeValue from 'actions/layer/changeValue';
import removeLayer from 'actions/layer/removeLayer';
import selectLayer from 'actions/layer/selectLayer';
import changePreviewValue from 'actions/preview/changeValue';
import ArrowUpOutlineButton from 'components/atoms/ArrowDownOutlineButton';
import ArrowDownOutlineButton from 'components/atoms/ArrowUpOutlineButton';
import DocumentAddButton from 'components/atoms/DocumentAddButton';
import DocumentDeleteButton from 'components/atoms/DocumentDeleteButton';
import ImageButton from 'components/atoms/ImageButton';
import Information, {
  InformationProps
} from 'components/organisms/Information';
import Layers, { LayersProps } from 'components/organisms/Layers';
import LayerSetting from 'components/organisms/LayerSetting';
import Preview from 'components/organisms/Preview';
import LayerStyles, {
  LayerStylesProps
} from 'components/organisms/LayerStyles';
import Dropzone, { DropzoneProps } from 'components/templates/Dropzone';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { State } from 'reducers';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import * as WebFont from 'webfontloader';

const Div = styled.div`
  background-color: #fbfbfb;
  display: grid;
  height: 100%;
  grid-template-columns: 275px 1fr 200px;
  grid-template-rows: 25px 1fr;

  .header {
    border-bottom: 1px #ddd inset;
    grid-column: 1 / 4;
  }

  .detail {
    overflow-y: scroll;
    padding: 5px;
  }

  .preview {
    box-shadow: 1px 0px #ddd inset;
    display: grid;
    grid-gap: 5px;
    grid-template-rows: 1fr 20px;
    padding: 5px;
  }

  .side-layers {
    box-shadow: 1px 0px #ddd inset;
    display: flex;
    flex-direction: column;

    .layers {
      flex-basis: 0;
      flex-grow: 1;
      overflow-y: scroll;
      padding: 5px;
    }
  }
`;

interface Font {
  fontFamily: string;
  name: string;
}

export interface PagesProps
  extends ReturnType<typeof mapDispatchToProps>,
    ReturnType<typeof mapStateToProps> {}

interface PagesState {
  isShowPortal: boolean;
}

class Pages extends React.Component<PagesProps, PagesState> {
  rootEl: HTMLElement;

  constructor(props: PagesProps) {
    super(props);

    this.rootEl = document.getElementById('root');
    this.state = {
      isShowPortal: false
    };
  }

  componentDidMount() {
    const { setFonts } = this.props;
    const request = new XMLHttpRequest();

    request.open('GET', '/jsons/fonts.json', true);
    request.responseType = 'blob';
    request.onload = ({ target: { response } }: any) => {
      const reader = new FileReader();

      reader.onload = ({ target: { result } }: any) => {
        const fonts: Font[] = JSON.parse(result);

        setFonts(fonts);

        WebFont.load({
          custom: {
            families: fonts.map(({ fontFamily }) => fontFamily),
            urls: ['/css/fonts.css']
          }
        });
      };
      reader.readAsText(response);
    };
    request.send();
  }

  componentDidUpdate({ layers: prevLayers }: PagesProps) {
    const { layers } = this.props;
    const { isShowPortal } = this.state;

    if (prevLayers.length !== layers.length) {
      this.setState({
        isShowPortal: false
      });
    }
  }

  render() {
    const {
      addImageLayers,
      addTextLayer,
      changeColor,
      changeFontFamily,
      changePreviewValue,
      changeStyle,
      changeValue,
      fonts,
      index,
      layers,
      preview,
      removeLayer,
      selectLayer
    } = this.props;
    const { isShowPortal } = this.state;

    let style;

    if (index !== undefined) {
      const { style: layerStyle } = layers[index];

      style = layerStyle;
    }

    return (
      <Div>
        <header className="header">
          <button
            onClick={() => {
              domtoimage.toBlob(document.getElementById('test')!).then(blob => {
                saveAs(blob, 'test.png');
              });
            }}
          >
            save
          </button>
        </header>
        <aside className="detail">
          {style && (
            <LayerStyles
              {...style}
              fonts={fonts}
              onChange={changeStyle}
              onChangeColor={changeColor}
              onChangeFontFamily={changeFontFamily}
            />
          )}
        </aside>
        <div className="preview">
          <Preview layers={layers} preview={preview} />
          <Information {...preview} onChange={changePreviewValue} />
        </div>
        <aside className="side-layers">
          <LayerSetting>
            {[
              <DocumentAddButton key="add" onClick={addTextLayer} />,
              <DocumentDeleteButton key="delete" onClick={removeLayer} />,
              <ImageButton
                key="image"
                onClick={() => {
                  this.setState({
                    isShowPortal: true
                  });
                }}
              />,
              <ArrowUpOutlineButton key="up" />,
              <ArrowDownOutlineButton key="down" />
            ]}
          </LayerSetting>
          <div className="layers">
            <Layers
              index={index}
              layers={layers}
              onChange={changeValue}
              onClick={selectLayer}
              onFocus={selectLayer}
            />
          </div>
        </aside>
        {isShowPortal
          ? ReactDOM.createPortal(
              <Dropzone onDrop={addImageLayers} />,
              this.rootEl
            )
          : ''}
      </Div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addImageLayers: (
    acceptedFiles: ArgumentTypes<DropzoneProps['onDrop']>[0]
  ) => {
    acceptedFiles.forEach(acceptedFile => {
      dispatch(addImageLayer({ url: URL.createObjectURL(acceptedFile) }));
    });
  },
  addTextLayer: () => dispatch(addTextLayer()),
  changeColor: ({
    rgb: value
  }: ArgumentTypes<LayerStylesProps['onChangeColor']>[0]) =>
    dispatch(changeStyle({ value, name: 'color' })),
  changeFontFamily: (
    value: ArgumentTypes<LayerStylesProps['onChangeFontFamily']>[0]
  ) => dispatch(changeStyle({ value, name: 'fontFamily' })),
  changePreviewValue: ({
    currentTarget: { checked, name, type, value }
  }: ArgumentTypes<InformationProps['onChange']>[0]) =>
    dispatch(
      changePreviewValue({ name, value: type === 'checkbox' ? checked : value })
    ),
  changeStyle: ({
    currentTarget: { name, value }
  }: ArgumentTypes<LayerStylesProps['onChange']>[0]) =>
    dispatch(changeStyle({ name, value })),
  changeValue: ({
    target: { value }
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(changeValue({ value })),
  removeLayer: () => dispatch(removeLayer()),
  selectLayer: ({
    currentTarget: { dataset }
  }:
    | ArgumentTypes<LayersProps['onClick']>[0]
    | ArgumentTypes<LayersProps['onFocus']>[0]) =>
    dispatch(selectLayer({ index: parseInt(dataset['index'], 10) })),
  setFonts: (fonts: Font[]) => dispatch(setFonts({ fonts }))
});

const mapStateToProps = ({
  fonts: { fonts },
  layer: { index, layers },
  preview
}: State) => ({
  fonts,
  index,
  layers,
  preview
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);

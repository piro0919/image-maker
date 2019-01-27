import setFonts from 'actions/fonts/setFonts';
import addLayer from 'actions/layer/addLayer';
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
import Layers from 'components/organisms/Layers';
import LayerSetting from 'components/organisms/LayerSetting';
import Preview from 'components/organisms/Preview';
import LayerStyles, {
  LayerStylesProps
} from 'components/organisms/LayerStyles';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
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

class Pages extends React.Component<PagesProps> {
  rootEl: HTMLElement;

  constructor(props: PagesProps) {
    super(props);

    this.rootEl = document.getElementById('root');
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

  render() {
    const {
      addLayer,
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
                FileSaver.saveAs(blob, 'test.png');
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
              <DocumentAddButton key="add" onClick={addLayer} />,
              <DocumentDeleteButton key="delete" onClick={removeLayer} />,
              <ImageButton key="image" onClick={() => {}} />,
              <ArrowUpOutlineButton key="up" />,
              <ArrowDownOutlineButton key="down" />
            ]}
          </LayerSetting>
          <div className="layers">
            <Layers
              index={index}
              layers={layers}
              onChange={changeValue}
              onFocus={selectLayer}
            />
          </div>
        </aside>
        {ReactDOM.createPortal(<p>a</p>, this.rootEl)}
      </Div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addLayer: () => dispatch(addLayer()),
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
  }: React.FocusEvent<HTMLTextAreaElement>) =>
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

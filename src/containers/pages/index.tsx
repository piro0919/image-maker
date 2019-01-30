import setFonts from 'actions/fonts/setFonts';
import addImageLayer from 'actions/layer/addImageLayer';
import addTextLayer from 'actions/layer/addTextLayer';
import changeStyle from 'actions/layer/changeStyle';
import changeValue from 'actions/layer/changeValue';
import downLayer from 'actions/layer/downLayer';
import removeLayer from 'actions/layer/removeLayer';
import selectLayer from 'actions/layer/selectLayer';
import upLayer from 'actions/layer/upLayer';
import changePreviewValue from 'actions/preview/changeValue';
import ArrowUpOutlineButton from 'components/atoms/ArrowDownOutlineButton';
import ArrowDownOutlineButton from 'components/atoms/ArrowUpOutlineButton';
import DocumentAddButton from 'components/atoms/DocumentAddButton';
import DocumentDeleteButton from 'components/atoms/DocumentDeleteButton';
import ImageButton from 'components/atoms/ImageButton';
import ImageLayerStyles from 'components/organisms/ImageLayerStyles';
import Information, {
  InformationProps
} from 'components/organisms/Information';
import Layers, { LayersProps } from 'components/organisms/Layers';
import LayerSetting from 'components/organisms/LayerSetting';
import Menu, { MenuProps } from 'components/organisms/Menu';
import Preview from 'components/organisms/Preview';
import TextLayerStyles, {
  TextLayerStylesProps
} from 'components/organisms/TextLayerStyles';
import Dropzone, { DropzoneProps } from 'components/templates/Dropzone';
import Logo from 'components/templates/Logo';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
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
    padding: 5px 10px;
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
    ReturnType<typeof mapStateToProps>,
    RouteComponentProps {}

interface PagesState {
  isShowDropzone: boolean;
  isShowLogo: boolean;
  loading: number;
}

class Pages extends React.Component<PagesProps, PagesState> {
  rootEl: HTMLElement;

  constructor(props: PagesProps) {
    super(props);

    this.rootEl = document.getElementById('root');
    this.state = {
      isShowDropzone: false,
      isShowLogo: true,
      // isShowLogo: process.env.NODE_ENV !== 'development',
      loading: 0
    };
  }

  componentDidMount() {
    const { setFonts } = this.props;
    const request = new XMLHttpRequest();

    request.open('GET', `${process.env.PUBLIC_URL}/jsons/fonts.json`, true);
    request.responseType = 'blob';
    request.onload = ({ target: { response } }: any) => {
      const reader = new FileReader();

      reader.onload = ({ target: { result } }: any) => {
        const fonts: Font[] = JSON.parse(result);
        const style = document.createElement('style');

        let counter = 0;

        setFonts(fonts);

        style.appendChild(
          document.createTextNode(
            fonts
              .map(
                ({ fontFamily }) =>
                  `@font-face {font-family: '${fontFamily}';src: url('${
                    process.env.PUBLIC_URL
                  }/fonts/${fontFamily}.woff2') format('woff2'),url('${
                    process.env.PUBLIC_URL
                  }/fonts/${fontFamily}.woff') format('woff'),url('${
                    process.env.PUBLIC_URL
                  }/fonts/${fontFamily}.ttf') format('truetype');}`
              )
              .join('')
          )
        );

        document.head.appendChild(style);

        WebFont.load({
          active: () => {
            setTimeout(() => {
              this.setState({ isShowLogo: false, loading: 100 }, () => {
                if (process.env.NODE_ENV !== 'development') {
                  return;
                }

                console.log('active');
              });
            }, 1000);
          },
          classes: false,
          custom: {
            families: fonts.map(({ fontFamily }) => fontFamily)
            // urls: [`${process.env.PUBLIC_URL}/styles/fonts.css`]
          },
          fontactive: (familyName: string, fvd: string) => {
            counter = counter + 1;

            this.setState(
              {
                loading: Math.floor((counter / fonts.length) * 100)
              },
              () => {
                if (process.env.NODE_ENV !== 'development') {
                  return;
                }

                console.log('fontactive', familyName, fvd);
              }
            );
          },
          fontinactive: (familyName: string, fvd: string) => {
            counter = counter + 1;

            this.setState(
              {
                loading: Math.floor((counter / fonts.length) * 100)
              },
              () => {
                if (process.env.NODE_ENV !== 'development') {
                  return;
                }

                console.log('fontinactive', familyName, fvd);
              }
            );
          }
        });
      };
      reader.readAsText(response);
    };
    request.send();
  }

  componentDidUpdate({ layers: prevLayers }: PagesProps) {
    const { layers } = this.props;
    const { isShowDropzone } = this.state;

    if (isShowDropzone && prevLayers.length !== layers.length) {
      this.setState({ isShowDropzone: false });
    }
  }

  render() {
    const {
      addImageLayers,
      addTextLayer,
      changeColor,
      changeFontFamily,
      changePreviewBackgroundColor,
      changePreviewOverflow,
      changePreviewValue,
      changeStyle,
      changeValue,
      downLayer,
      fonts,
      index,
      layers,
      preview,
      removeLayer,
      selectLayer,
      upLayer
    } = this.props;
    const { isShowDropzone, isShowLogo, loading } = this.state;

    let styles = <React.Fragment />;

    if (index !== undefined) {
      const layer = layers[index];

      if ('value' in layer) {
        const { style } = layer;

        styles = (
          <TextLayerStyles
            {...style}
            fonts={fonts}
            onChange={changeStyle}
            onChangeColor={changeColor}
            onChangeFontFamily={changeFontFamily}
          />
        );
      } else if ('url' in layer) {
        const { style } = layer;

        styles = <ImageLayerStyles {...style} onChange={changeStyle} />;
      }
    }

    return (
      <Div>
        <header className="header">
          <Menu {...preview} changePreviewOverflow={changePreviewOverflow} />
        </header>
        <aside className="detail">{styles}</aside>
        <div className="preview">
          <Preview layers={layers} preview={preview} />
          <Information
            {...preview}
            onChange={changePreviewValue}
            onChangeBackgroundColor={changePreviewBackgroundColor}
          />
        </div>
        <aside className="side-layers">
          <LayerSetting>
            {[
              <DocumentAddButton key="add" onClick={addTextLayer} />,
              <DocumentDeleteButton
                disabled={index === undefined}
                key="delete"
                onClick={removeLayer}
              />,
              <ImageButton
                key="image"
                onClick={() => {
                  this.setState({ isShowDropzone: true });
                }}
              />,
              <ArrowUpOutlineButton
                disabled={index === undefined || index === layers.length - 1}
                key="up"
                onClick={upLayer}
              />,
              <ArrowDownOutlineButton
                disabled={!index}
                key="down"
                onClick={downLayer}
              />
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
        {isShowDropzone ? (
          ReactDOM.createPortal(
            <Dropzone
              onClickCloseButton={() => {
                this.setState({ isShowDropzone: false });
              }}
              onDrop={addImageLayers}
            />,
            this.rootEl
          )
        ) : (
          <React.Fragment />
        )}
        {isShowLogo ? (
          ReactDOM.createPortal(<Logo loading={loading} />, this.rootEl)
        ) : (
          <React.Fragment />
        )}
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
  }: ArgumentTypes<TextLayerStylesProps['onChangeColor']>[0]) =>
    dispatch(changeStyle({ value, name: 'color' })),
  changeFontFamily: (
    value: ArgumentTypes<TextLayerStylesProps['onChangeFontFamily']>[0]
  ) => dispatch(changeStyle({ value, name: 'fontFamily' })),
  changePreviewBackgroundColor: ({
    rgb: value
  }: ArgumentTypes<TextLayerStylesProps['onChangeColor']>[0]) =>
    dispatch(changePreviewValue({ value, name: 'backgroundColor' })),
  changePreviewOverflow: (value: MenuProps['overflow']) =>
    dispatch(changePreviewValue({ value, name: 'overflow' })),
  changePreviewValue: ({
    currentTarget: { checked, name, type, value }
  }: ArgumentTypes<InformationProps['onChange']>[0]) =>
    dispatch(
      changePreviewValue({ name, value: type === 'checkbox' ? checked : value })
    ),
  changeStyle: ({
    currentTarget: { name, value }
  }: ArgumentTypes<TextLayerStylesProps['onChange']>[0]) =>
    dispatch(changeStyle({ name, value })),
  changeValue: ({
    target: { value }
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(changeValue({ value })),
  downLayer: () => dispatch(downLayer()),
  removeLayer: () => dispatch(removeLayer()),
  selectLayer: ({
    currentTarget: { dataset }
  }:
    | ArgumentTypes<LayersProps['onClick']>[0]
    | ArgumentTypes<LayersProps['onFocus']>[0]) =>
    dispatch(selectLayer({ index: parseInt(dataset['index'], 10) })),
  setFonts: (fonts: Font[]) => dispatch(setFonts({ fonts })),
  upLayer: () => dispatch(upLayer())
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

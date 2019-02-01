import Image, { ImageProps } from 'components/templates/Image';
import New, { NewProps } from 'components/templates/New';
import Loading from 'components/templates/Loading';
import domtoimage from 'dom-to-image';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;

  * {
    cursor: default;
  }

  ul {
    background-color: #fff;
    border: 1px #ddd solid;
    position: absolute;
  }

  li {
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;

    &:hover {
      background-color: rgba(35, 71, 148, 0.1);

      > ul > li {
        display: flex;
      }
    }
  }

  > li {
    display: flex;
    height: 24px;
    width: 50px;

    > ul {
      left: -1px;
      top: 100%;

      li {
        display: none;
        height: 25px;

        > *:not(ul) {
          align-items: center;
          color: inherit;
          display: flex;
          justify-content: flex-start;
          padding: 0 30px 0 15px;
          text-decoration: none;
        }
      }

      > li > ul {
        left: 100%;
        top: 0;

        &::after {
          border-color: transparent transparent transparent black;
          border-style: solid;
          border-width: 4px 0 4px 4px;
          content: '';
          display: block;
          height: 0;
          left: -10px;
          position: absolute;
          top: 9px;
          width: 0;
        }
      }
    }
  }
`;

export interface MenuProps
  extends Pick<
    NewProps,
    | 'backgroundColor'
    | 'changePreviewIsInitialize'
    | 'fileName'
    | 'height'
    | 'onChangePreviewBackgroundColor'
    | 'onChangePreviewValue'
    | 'width'
  > {
  changePreviewOverflow: (value: boolean) => void;
  overflow: boolean;
}

interface MenuState {
  extension?: ImageProps['extension'];
  imageUrl: string;
  isNew: boolean;
  isShowLoading: boolean;
}

class Menu extends React.Component<MenuProps, MenuState> {
  rootEl: HTMLElement;

  constructor(props: MenuProps) {
    super(props);

    this.rootEl = document.getElementById('root');
    this.state = {
      extension: undefined,
      imageUrl: '',
      isNew: false,
      isShowLoading: false
    };
  }

  componentDidUpdate({ overflow: prevOverflow }: MenuProps) {
    const { changePreviewOverflow, overflow } = this.props;
    const { extension, isShowLoading } = this.state;

    if (isShowLoading) {
      if (overflow) {
        changePreviewOverflow(false);

        return;
      }

      const callback = (imageUrl: string) => {
        this.setState(
          {
            imageUrl,
            isShowLoading: false
          },
          () => {
            if (prevOverflow) {
              changePreviewOverflow(true);
            }
          }
        );
      };

      if (extension === 'jpg') {
        domtoimage.toJpeg(document.getElementById('capture')!).then(callback);
      }

      if (extension === 'png') {
        domtoimage.toPng(document.getElementById('capture')!).then(callback);
      }

      if (extension === 'svg') {
        domtoimage.toSvg(document.getElementById('capture')!).then(callback);
      }
    }
  }

  render() {
    const { fileName } = this.props;
    const { extension, imageUrl, isNew, isShowLoading } = this.state;

    return (
      <Ul>
        <li>
          <p>File</p>
          <ul>
            <li>
              <button
                onClick={() => {
                  this.setState({ isNew: true });
                }}
              >
                New
              </button>
            </li>
            <li>
              <p>Save</p>
              <ul>
                <li>
                  <button
                    onClick={() => {
                      this.setState({
                        extension: 'jpg',
                        isShowLoading: true
                      });
                    }}
                  >
                    JPG
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      this.setState({
                        extension: 'png',
                        isShowLoading: true
                      });
                    }}
                  >
                    PNG
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      this.setState({
                        extension: 'svg',
                        isShowLoading: true
                      });
                    }}
                  >
                    SVG
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Help</p>
          <ul>
            <li>
              <a href="https://github.com/piro0919/image-maker" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </li>
        {extension &&
          imageUrl &&
          ReactDOM.createPortal(
            <Image
              extension={extension}
              fileName={fileName}
              onClickCloseButton={() => {
                this.setState({ extension: undefined, imageUrl: '' });
              }}
              src={imageUrl}
            />,
            this.rootEl
          )}
        {isNew &&
          ReactDOM.createPortal(
            <New
              {...this.props}
              onClickCloseButton={() => {
                this.setState({ isNew: false });
              }}
            />,
            this.rootEl
          )}
        {isShowLoading && ReactDOM.createPortal(<Loading />, this.rootEl)}
      </Ul>
    );
  }
}

export default Menu;

import Image, { ImageProps } from 'components/templates/Image';
import Loading from 'components/templates/Loading';
import domtoimage from 'dom-to-image';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;

  > li {
    position: relative;

    &:hover {
      background-color: #fff;

      > ul {
        display: block;
      }
    }

    > p {
      align-items: center;
      display: flex;
      height: 24px;
      justify-content: center;
      width: 50px;
    }

    > ul {
      background-color: #fff;
      border: 1px #ddd solid;
      display: none;
      left: -1px;
      position: absolute;
      top: 100%;

      > li {
        > a,
        > button,
        > p {
          align-items: center;
          display: flex;
          height: 25px;
          padding: 0 30px 0 15px;
          white-space: nowrap;
        }

        > a {
          color: inherit;
          text-decoration: none;
        }
      }
    }
  }
`;

export interface MenuProps {
  changePreviewOverflow: (value: boolean) => void;
  overflow: boolean;
}

interface MenuState {
  extension?: ImageProps['extension'];
  imageUrl: string;
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
    const { extension, imageUrl, isShowLoading } = this.state;

    return (
      <React.Fragment>
        <Ul>
          <li>
            <p>File</p>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.setState({ extension: 'jpg', isShowLoading: true });
                  }}
                >
                  Save As JPG
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.setState({ extension: 'png', isShowLoading: true });
                  }}
                >
                  Save As PNG
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.setState({ extension: 'svg', isShowLoading: true });
                  }}
                >
                  Save As SVG
                </button>
              </li>
            </ul>
          </li>
          <li>
            <p>Help</p>
            <ul>
              <li>
                <a
                  href="https://github.com/piro0919/image-maker"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </li>
        </Ul>
        {extension && imageUrl ? (
          ReactDOM.createPortal(
            <Image
              extension={extension}
              onClickCloseButton={() => {
                this.setState({ extension: undefined, imageUrl: '' });
              }}
              src={imageUrl}
            />,
            this.rootEl
          )
        ) : (
          <React.Fragment />
        )}
        {isShowLoading ? (
          ReactDOM.createPortal(<Loading />, this.rootEl)
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}

export default Menu;

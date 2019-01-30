import Loading from 'components/templates/Loading';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  font-size: 1.2rem;

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
  isShowLoading: boolean;
}

class Menu extends React.Component<MenuProps, MenuState> {
  rootEl: HTMLElement;

  constructor(props: MenuProps) {
    super(props);

    this.rootEl = document.getElementById('root');
    this.state = {
      isShowLoading: false
    };
  }

  componentDidUpdate({ overflow: prevOverflow }: MenuProps) {
    const { changePreviewOverflow, overflow } = this.props;
    const { isShowLoading } = this.state;

    if (isShowLoading) {
      if (overflow) {
        changePreviewOverflow(false);

        return;
      }

      // domtoimage.toBlob(document.getElementById('capture')!).then(blob => {
      //   saveAs(blob, 'image.png');

      //   this.setState(
      //     {
      //       isShowLoading: false
      //     },
      //     () => {
      //       if (prevOverflow) {
      //         changePreviewOverflow(true);
      //       }
      //     }
      //   );
      // });

      domtoimage.toPng(document.getElementById('capture')!).then(dataUrl => {
        const img = new Image();

        img.src = dataUrl;

        document.body.appendChild(img);

        this.setState(
          {
            isShowLoading: false
          },
          () => {
            if (prevOverflow) {
              changePreviewOverflow(true);
            }
          }
        );
      });
    }
  }

  render() {
    const { isShowLoading } = this.state;

    return (
      <React.Fragment>
        <Ul>
          <li>
            <p>File</p>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.setState({ isShowLoading: true });
                  }}
                >
                  Save
                </button>
              </li>
              {/* <li>
          <p>Save As...</p>
        </li> */}
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
              {/* <li>
                <p>About Image Maker</p>
              </li> */}
            </ul>
          </li>
        </Ul>
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

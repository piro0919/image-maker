import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import * as React from 'react';
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
        > button,
        > p {
          align-items: center;
          display: flex;
          height: 24px;
          margin: 0 10px;
          min-width: 50px;
          white-space: nowrap;
        }
      }
    }
  }
`;

const Menu: React.SFC = () => (
  <Ul>
    <li>
      <p>File</p>
      <ul>
        <li>
          <button
            onClick={() => {
              domtoimage.toBlob(document.getElementById('test')!).then(blob => {
                saveAs(blob, 'image.png');
              });
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
      <p>File</p>
      <ul>
        <li>
          <button
            onClick={() => {
              domtoimage
                .toBlob(document.getElementById('capture')!)
                .then(blob => {
                  saveAs(blob, 'image.png');
                });
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
  </Ul>
);

export default Menu;

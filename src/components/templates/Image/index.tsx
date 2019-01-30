import * as $ from 'jquery';
import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export interface ImageProps {
  src: string;
}

class Image extends React.Component<ImageProps> {
  componentDidMount() {
    $('#root > div:not(.portal)').css('filter', 'blur(2.5px)');
  }

  componentWillUnmount() {
    $('#root > div:not(.portal)').css('filter', 'blur(0)');
  }

  render() {
    const { src } = this.props;

    return (
      <Div className="portal">
        <img src={src} />
      </Div>
    );
  }
}

export default Image;

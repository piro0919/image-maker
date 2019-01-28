import * as React from 'react';
import * as uniqid from 'uniqid';

export interface ImagePreviewProps {
  style: {
    opacity: number;
    rotate: number;
    scale: number;
  };
  url: string;
}

interface ImagePreviewState {
  height: number;
  width: number;
}

class ImagePreview extends React.Component<
  ImagePreviewProps,
  ImagePreviewState
> {
  id: string;

  constructor(props: ImagePreviewProps) {
    super(props);

    this.id = uniqid();
    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const element = new Image();

    element.onload = () => {
      const { naturalHeight: height, naturalWidth: width } = element;

      this.setState(
        {
          height,
          width
        },
        () => {
          const canvas = document.getElementById(this.id) as HTMLCanvasElement;
          const context = canvas.getContext('2d');
          const image = new Image();

          image.src = url;
          image.onload = () => {
            context!.drawImage(image, 0, 0, width, height);
          };
        }
      );
    };
    element.src = url;
  }

  render() {
    const {
      style: { rotate, scale, ...style }
    } = this.props;
    const { height, width } = this.state;

    return (
      <canvas
        height={height}
        id={this.id}
        style={{ transform: `rotate(${rotate}deg) scale(${scale})`, ...style }}
        width={width}
      />
    );
  }
}

export default ImagePreview;

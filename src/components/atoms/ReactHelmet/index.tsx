import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface ReactHelmetProps {
  fileName: string;
}

class ReactHelmet extends React.Component<ReactHelmetProps> {
  shouldComponentUpdate({ fileName: nextFileName }) {
    const { fileName } = this.props;

    return nextFileName !== fileName;
  }

  render() {
    const { fileName } = this.props;

    return (
      <Helmet>
        <title>{`Image Maker: ${fileName}`}</title>
      </Helmet>
    );
  }
}

export default ReactHelmet;

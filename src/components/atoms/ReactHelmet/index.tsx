import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface ReactHelmetProps {
  fileName: string;
}

const ReactHelmet: React.SFC<ReactHelmetProps> = ({
  fileName
}: ReactHelmetProps) => (
  <Helmet>
    <title>{`Image Maker: ${fileName}`}</title>
  </Helmet>
);

export default ReactHelmet;

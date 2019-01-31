import CloseButton, { CloseButtonProps } from 'components/atoms/CloseButton';
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

  .close-button {
    height: 50px;
    position: fixed;
    right: 10px;
    top: 10px;
    width: 50px;
  }
`;

export interface PortalProps {
  className?: string;
  children: React.ReactNode;
  onClickCloseButton?: CloseButtonProps['onClick'];
}

class Portal extends React.Component<PortalProps> {
  componentDidMount() {
    $('#root > div:not(.portal)').css('filter', 'blur(2.5px)');
  }

  componentWillUnmount() {
    $('#root > div:not(.portal)').css('filter', 'blur(0)');
  }

  render() {
    const { children, className, onClickCloseButton } = this.props;

    return (
      <Div className={`portal ${className}`}>
        {children}
        {onClickCloseButton ? (
          <CloseButton className="close-button" onClick={onClickCloseButton} />
        ) : (
          <React.Fragment />
        )}
      </Div>
    );
  }
}

export default Portal;

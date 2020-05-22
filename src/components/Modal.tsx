import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { v1 } from 'uuid';

interface Props {
 children: (close: () => void) => React.ReactNode;
 onClose?: () => void;
 portalSelector: string;
 show: boolean;
}

class Modal extends React.Component<Props, any> {
  static defaultProps = {
    portalSelector: '#bottomPortal',
    show: false,
  };

  containerID = v1();

  container = null;

  escEventListener = null;

  modalRef = React.createRef();

  portalDiv = null;

  componentDidMount() {
    const { portalSelector } = this.props;

    this.portalDiv = document.querySelector(portalSelector);
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.containerID);
  }

  shouldComponentUpdate(nextProps: Props) {
    const { show: oldShow } = this.props;
    const { show: newShow } = nextProps;

    return oldShow !== newShow;
  }

  componentDidUpdate() {
    const { show } = this.props;

    if (show) {
      this.portalDiv.appendChild(this.container);
      this.escEventListener = document.addEventListener('keyup', this.handleEsc);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.escEventListener);
    this.close();
  }

  close = () => {
    try {
      const { onClose } = this.props;
      if (typeof onClose === 'function') onClose();

      this.portalDiv.removeChild(this.container);
    } catch (error) { /* Modal has already been unmounted */ }
  }

  handleEsc = (event) => {
    if (event.key === 'Escape') this.close();
  }

  render() {
    const { children, show } = this.props;
    if (!show) return null;

    const elements = (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          {children(this.close)}
        </div>
      </div>
    );

    return ReactDOM.createPortal(
      elements,
      this.container,
    );
  }
}

export default Modal;

import * as React from 'react';
import Modal from './Modal';
import ThinButton from './ThinButton';

interface Props {
 onClose: () => void;
 onReset: () => void;
 show: boolean;
}

const CancelModal = ({ onClose, onReset, show }: Props) => (
  <Modal show={show} onClose={onClose}>
    {(close) => {
      const reset = () => {
        onReset();
        close();
      };

      return (
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Are you sure?</p>
          </header>
          <section className="modal-card-body">
            <p>You&apos;re about to cancel, this will clear out your form</p>
          </section>
          <footer className="modal-card-foot">
            <ThinButton primary onClick={reset}>Reset</ThinButton>
            <ThinButton primary inverted onClick={close}>Cancel</ThinButton>
          </footer>
        </div>
      );
    }}
  </Modal>
);

export default CancelModal;

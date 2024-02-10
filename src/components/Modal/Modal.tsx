import React from 'react';
import Form from '../Form/Form';
import { IHouseData } from '../../hooks/useHouseData';
import "./modal.css"

interface ModalProps {
  handleClose: () => void;
  onSubmit: (formData: IHouseData) => void;
}

const Modal: React.FC<ModalProps> = ({ handleClose, onSubmit }) => {
  const handleFormSubmit = (formData: IHouseData) => {
    onSubmit(formData);
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>House Registration Form</h2>
        <Form onSubmit={handleFormSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default Modal;
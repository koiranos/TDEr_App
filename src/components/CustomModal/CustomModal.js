import React from "react";
import { Modal } from "antd";

const CustomModal = ({ title, isModalOpen, closeModal, onOk, children }) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={onOk}
      onCancel={() => closeModal(false)}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;

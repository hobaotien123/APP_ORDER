// libs
import React from "react";
import { Modal } from "antd";
// others
import "./style.scss";
import { useRouter } from "@/hooks";

/**
 * ModalFood
 * @returns
 */

const ModalFood = ({ children }) => {
  const handleOk = () => {};
  const router = useRouter();
  const { background } = router.location.state || {};

  const handleCancel = () => {
    router.push({
      ...background,
      state: {
        ...background.state
      }
    });
  };

  return (
    <div className="modal-food-wrapper">
      <Modal
        className="antd-modal-wrapper"
        width={1100}
        title="Order Food"
        visible
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children()}
      </Modal>
    </div>
  );
};

export default ModalFood;

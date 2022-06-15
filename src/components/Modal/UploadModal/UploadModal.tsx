import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getViewportWidth } from "../../../utils/util";
import Label from "../../Shared/Label/Label";
import Modal from "../Modal/Modal";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalListVideo from "../ModalListVideo/ModalListVideo";
import ModalPortfolio from "../ModalPortfolio/ModalPortfolio";
import ModalStat from "../ModalStat/ModalStat";
const UploadModal = () => {
const data = useSelector((state: RootState) => state.modal);
  return (
    <Modal>
      <div className="flex gap-3" style={getViewportWidth()>=1024?{marginLeft: "75%"}:{margin: "auto", width: "fit-content"}}>
        <Label color="#ff2e43" width="60px" height="50px">
          TZ
        </Label>
        <Label color="blue" width="60px" height="50px">
          HR
        </Label>
      </div>
      <ModalHeader data={data} />
      <hr />
      <ModalPortfolio data={data} />
      <hr />
      <ModalStat data={data} />
      <hr />
      <ModalListVideo data={data} />
      <ModalFooter data={data} />
    </Modal>
  );
};

export default UploadModal;

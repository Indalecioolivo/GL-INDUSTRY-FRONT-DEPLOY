import "./ModalAlert.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import SucessImg from "../../assets/sucess.png";
import UnSucessImg from "../../assets/unsucess.png";

export default function ModalAlert() {
  const {
    showModalAlert,
    setShowModalAlert,
    showModalRegister,
    setShowModalRegister,
    showModalEdit,
    setShowModalEdit,
    toModalInformations,
    setToModalInformations,
    setShowModalRegisterRawMaterial,
    toEditRawMaterial,
    setToEditRawMaterial,
    setToRawMaterialInformations,
    setToModalEditFlowRawMaterial,
    setToModalFlowInfos,
  } = useContext(GeneralContext);
  function handleCloseModal() {
    if (showModalAlert.status == 201 || showModalAlert.status == 200) {
      setShowModalRegister({ ...showModalRegister, showModal: false });
      setShowModalEdit({ ...showModalEdit, showModal: false });
      setToModalInformations({ ...toModalInformations, showModal: false });
      setShowModalAlert({ ...showModalAlert, showModal: false });
      setShowModalRegisterRawMaterial(false);
      setToEditRawMaterial(false);
      setToRawMaterialInformations(false);
      setToModalEditFlowRawMaterial(false);
      setToModalFlowInfos(false);
    } else {
      setShowModalAlert({ ...showModalAlert, showModal: false });
    }
  }
  return (
    <div className="modal-alert-container">
      <img
        src={
          showModalAlert.status == 200 || showModalAlert.status == 201
            ? SucessImg
            : UnSucessImg
        }
        alt=""
      />
      <h3>{showModalAlert.message}</h3>
      <button onClick={() => handleCloseModal()}>OK</button>
    </div>
  );
}

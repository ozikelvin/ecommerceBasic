import "./style.css";
import Close from "../Close.svg";
import {CustomModal, ModalWrapper,
   CloseModal, ModalHeader
  } from './modal.styled';




export const Modal = ({ children, closeModal }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>
      <div className="app_modal">
        <img className="modalCloseImg" onClick={() => closeModal(false)} src={Close} alt={""}/>
        {children || "Enter element here"}
      </div>
    </>
  );
};
  
export const ModalCustom = ({children, closeModal, title}) =>{

  return (
    <>
    <CustomModal onClick={() => closeModal(false)} >  </CustomModal>
      <ModalWrapper  >
        <ModalHeader className='d-flex justify-content-end' >
          
 <CloseModal onClick={() => closeModal(false)} src={Close} alt={""} className='mr-n5 my-2' /> 
        </ModalHeader>
        {
          children 
        }
      </ModalWrapper>
  
    </>
  )
}






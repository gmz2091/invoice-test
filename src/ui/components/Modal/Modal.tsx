import  { type JSX } from 'react'
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

interface ModalProps {
  title?: string
  body?: string | JSX.Element
  footer?: string | JSX.Element
  visible: boolean
  onClose: () => void
}

const Modal = ({ title, body, footer, visible, onClose }: ModalProps): JSX.Element => {
  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="modal-sizes-title-lg">
      {title && (
        <CModalHeader>
          <CModalTitle id="modal-sizes-title-lg">{title}</CModalTitle>
        </CModalHeader>
      )}
      {body && <CModalBody>{body}</CModalBody>}
      {footer && <CModalFooter>{footer}</CModalFooter>}
    </CModal>
  )
}


export default Modal
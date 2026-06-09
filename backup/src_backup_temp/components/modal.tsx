import Modal from 'react-modal';

interface ModalProps {
    isOpen:boolean;
    children: React.ReactNode;
}

const ModalView = ({isOpen, children}:ModalProps) => {
    return (
            <Modal isOpen={isOpen} className="rounded-lg m-10 h-auto w-auto bg-gray-100 border-2 border-gray-300" >
                {children}
            </Modal>
    )
}

export default ModalView
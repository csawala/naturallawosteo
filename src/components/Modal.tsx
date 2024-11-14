import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react"

import Button from "./Button"

interface ModalProps {
  children: React.ReactNode
  title?: string
  visible: boolean
  onClose: () => void
}

const Modal = ({ children, onClose, title, visible }: ModalProps) => {
  return (
    <Dialog onClose={onClose} open={visible}>
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg bg-white p-6">
          {title && <DialogTitle>{title}</DialogTitle>}
          {children}
          <div className="flex flex-row gap-x-3 items-center justify-end">
            <Button onClick={onClose} variant="primary">
              Close
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default Modal

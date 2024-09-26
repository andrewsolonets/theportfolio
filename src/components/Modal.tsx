interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-[51] flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0 "
      }`}
    >
      <div
        className={`modal-content mx-6 transform rounded-lg bg-primary-glass p-6 text-center transition-transform  duration-300  sm:mx-0 ${
          isOpen ? "open scale-100" : "close scale-0 delay-100"
        }`}
      >
        <h2 className="text-2xl font-bold">Message Sent!</h2>
        <p>
          Your message has been successfully sent. I'll get back to you soon.
        </p>
        <button
          className="mt-4 rounded bg-secondary px-4 py-2 text-primary"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

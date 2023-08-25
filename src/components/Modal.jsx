
function Modal({ open, onClose }) {
  if (!open) return null
  return(
    <>
    <div className="overlay"></div>
    <div className="modal">
        <button onClick={onClose}>close</button>
    </div>
    </>
  )
}

export default Modal;

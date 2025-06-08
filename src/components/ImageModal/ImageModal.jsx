import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => (
  <Modal
    isOpen={true}
    onRequestClose={onClose}
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <img src={image.urls.regular} alt={image.alt_description} />
    <p>Author: {image.user.name}</p>
    <p>Likes: {image.likes}</p>
    <p>Description: {image.description || "No description"}</p>
  </Modal>
);

export default ImageModal;

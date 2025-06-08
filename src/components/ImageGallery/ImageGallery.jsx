import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.gallery}>
    {images.map((img) => (
      <li key={img.id} className={css.item}>
        <ImageCard image={img} onClick={() => onImageClick(img)} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;

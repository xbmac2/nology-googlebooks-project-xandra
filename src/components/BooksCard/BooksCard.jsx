import Modal from "../Modal/Modal";
import styles from "./BooksCard.module.scss"
import { useState } from "react";

const BooksCard = ({ 
  title = "Title unknown", 
  author = [], 
  description = "", 
  image = "No image provided",
  publishedDate = "Unknown publish date",
  pages = "Pages unknown" }) => {

  let authorStr = null;

  if (author.length > 0) {
    authorStr = author.join(", ");
  } else {
    authorStr = "Author unknown";
  }

  //const authorStr = author?.join(", ");
  const descriptionShort = description.substring(0, 150) + "..."

  const [modalShowing, setModalShowing] = useState(false);
  const toggleModal = () => {
    setModalShowing(!modalShowing);
  };

  if (modalShowing) {
    document.body.classList.add("active_modal");
  } else {
    document.body.classList.remove("active_modal");
  }

  return (
    <article className={styles.card} onClick={toggleModal}>
      {/* no imageprovided thumbnail shuould actually be a link to the image */}
      <div className={styles.card_frame}>
        <img src={image} alt="" className={styles.padding}/>
      </div>
      
      <div className={styles.padding}>
        <h3>{title}</h3>
        <p>{authorStr}</p>
      </div>
      {description ? <p className={styles.padding}>{descriptionShort}</p> : <p className={styles.padding}>No description found</p>}
      {/* <p>Desc: {descriptionShort}</p> */}
      {modalShowing && <Modal 
      toggleModal={toggleModal}
      description={description}
      publishedDate={publishedDate}
      pages={pages}
      title={title}
      />}
      
    </article>
  )
}

export default BooksCard
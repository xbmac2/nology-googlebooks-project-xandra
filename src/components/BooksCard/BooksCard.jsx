import Modal from "../Modal/Modal";
import styles from "./BooksCard.module.scss";
import { Fragment, useState } from "react";
import assets from "../../assets/assets";
import defaultImage from "/default-image.png";

const BooksCard = ({ 
  title = "Title unknown", 
  author = [], 
  description = "", 
  image,
  publishedDate = "Unknown publish date",
  pages = "Pages unknown" }) => {

  let authorStr = null;

  if (author.length > 0) {
    authorStr = author.join(", ");
  } else {
    authorStr = "Author unknown";
  }

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
    <Fragment>
      <article className={styles.card} onClick={toggleModal}>
      <div className={styles.card_frame}>
        <img src={image} alt="" className={styles.image}/>
      </div>
      
      <div className={styles.padding}>
        <h3>{title}</h3>
        <p>{authorStr}</p>
      </div>
      <p className={styles.padding}>{description ? descriptionShort : "No description available"}</p>
      
    </article>

    {modalShowing && <Modal 
      toggleModal={toggleModal}
      description={description}
      publishedDate={publishedDate}
      pages={pages}
      title={title}
      />}
    
    </Fragment>
    
  )
}

export default BooksCard
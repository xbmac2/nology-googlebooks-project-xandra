import styles from "./Modal.module.scss"

const Modal = ({toggleModal, description, publishedDate, pages, title }) => {

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={toggleModal}></div>
      <div className={styles.modal_content}>
        <h4>{title}</h4>
        <p>Pages: {pages}</p>
        <p>Published: {publishedDate}</p>
        <p>Description: {description}</p>
        <button className={styles.close_modal} onClick={toggleModal}>Close</button>
      </div>
    </div>
  )
}

export default Modal
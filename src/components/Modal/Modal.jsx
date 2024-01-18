import styles from "./Modal.module.scss"

const Modal = ({toggleModal, description, publishedDate, pages, title }) => {
  ////TOOK onClick={toggleModal} OFF OVERLAY!!!
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.modal_content}>
        <div className={styles.space_between}>
        <h4>{title}</h4>
        <button className={styles.close_modal} onClick={toggleModal}>Close</button>
        </div>
        
        <p><b>Pages: </b>{pages}</p>
        <p><b>Published: </b>{publishedDate}</p>
        <p><b>Description: </b>{description ? description : "No description found"}</p>
        
      </div>
    </div>
  )
}

export default Modal
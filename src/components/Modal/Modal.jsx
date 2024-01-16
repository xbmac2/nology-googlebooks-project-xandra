import styles from "./Modal.module.scss"

const Modal = ({toggleModal}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={toggleModal}></div>
      <div className={styles.modal_content}>
        <h4>Modal title</h4>
        <p>Modal para Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi id quaerat. Odit laborum at quidem illum, repellat quod, possimus praesentium adipisci repellendus sunt expedita voluptatibus libero pariatur, rerum reiciendis veniam? Dignissimos saepe pariatur libero ex consequuntur quis vitae, consequatur, molestiae necessitatibus labore corporis magnam consectetur quasi facere nisi numquam!</p>
        <button className={styles.close_modal} onClick={toggleModal}>Close</button>
      </div>
    </div>
  )
}

export default Modal
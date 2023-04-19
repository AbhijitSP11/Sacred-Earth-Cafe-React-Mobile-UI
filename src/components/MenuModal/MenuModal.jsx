import React, { useState } from 'react';
import styles from './MenuModal.module.scss'; // Import the SCSS file

const MenuModal = () => {
  const [showModal, setShowModal] = useState(false); // State to track modal visibility

  const handleModalToggle = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  return (
    <>
      {/* Button for the menu */}
      <button className={styles.menuButton} onClick={handleModalToggle}>
        Menu
      </button>

      {/* Modal container */}
      {showModal && (
        <div className={styles.menuContainer}>
          {/* Modal content */}
          <div className={styles.menuContent}>
            {/* Content of the modal goes here */}
            <h2>Modal Title</h2>
            <p>Modal Content</p>
            {/* Close button for the modal */}
            <button className={styles.CloseButton} onClick={handleModalToggle}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuModal;
